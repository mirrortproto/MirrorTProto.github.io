// Builds Eleventy sources (src/) exclusively from the dated backup in backup/<date>/.
// NO network access here — the backup is the single source of truth.
//
// Usage: node tools/extract.mjs [date]   (defaults to the newest backup)
import { mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');

async function pickBackup(arg) {
  const dir = path.join(ROOT, 'backup');
  if (arg) return path.join(dir, arg);
  const dates = (await readdir(dir)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  if (!dates.length) throw new Error('no backup found: run tools/crawl.mjs first');
  return path.join(dir, dates[dates.length - 1]);
}

function extractDiv(html, marker) {
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf('<div', start);
  let i = html.indexOf('>', start) + 1;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith('</div')) depth--;
    else depth++;
    if (depth === 0) return html.slice(tagStart, m.index + 6);
  }
  return null;
}

function extractH1(html) {
  const m = html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/)
    || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return decode(m[1].replace(/<[^>]+>/g, '')).trim();
}

function extractCrumbs(html) {
  const m = html.match(/<div class="dev_page_bread_crumbs">([\s\S]*?)<\/div>/);
  if (!m) return [];
  const crumbs = [];
  const re = /<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
  let c;
  while ((c = re.exec(m[1])) !== null) {
    crumbs.push({ url: c[1], title: decode(c[2].replace(/<[^>]+>/g, '')).trim() });
  }
  return crumbs;
}

function decode(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—').replace(/&amp;/g, '&');
}

function stripNoise(html) {
  let h = html.replace(/<script[\s\S]*?<\/script>/g, '');
  // layer selector dropdown (shared UI noise on schema pages)
  h = h.replace(/<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g, '');
  // heading anchor icons (we generate our own anchors)
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, '');
  return h;
}

// ---- turndown ----
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.addRule('preCode', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_c, node) => '\n\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n\n',
});
td.addRule('pageSchemeDiv', {
  filter: (node) => node.nodeName === 'DIV' && /page_scheme/.test(node.getAttribute('class') || ''),
  replacement: (_c, node) => '\n\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n\n',
});
td.keep(['table']);

function sectionOf(p) {
  if (p === '/methods' || p === '/constructors' || p === '/types') return 'schema';
  if (p.startsWith('/constructor') || p.startsWith('/method') || p.startsWith('/type')) return 'ref';
  if (p.startsWith('/mtproto')) return 'mtproto';
  if (p.startsWith('/schema')) return 'schema';
  if (p.startsWith('/techfaq')) return 'faq';
  if (p === '/faq' || p.startsWith('/faq/')) return 'faq';
  return 'api';
}

function fmEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

// Same slug algorithm as eleventy.config.mjs (markdown-it-anchor)
const slugify = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');

const cleanInline = (s) =>
  s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, '').replace(/`/g, '').replace(/\*\*/g, '');

// heading slugs of a markdown body (fences ignored)
function headingSlugs(md) {
  const slugs = new Set();
  let inFence = false;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = t.match(/^#{1,6}\s+(.+)$/);
    if (m) slugs.add(slugify(cleanInline(m[1])));
  }
  return slugs;
}

// First meaningful paragraph of the ORIGINAL page, used for <meta description>/OG.
// No text of our own is added — only the original wording.
function deriveDescription(md) {
  let inFence = false;
  for (const line of md.split('\n')) {
    const t = line.trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!t || t === '---' || /^#/.test(t) || t.startsWith('|') || t.startsWith('>') || t.startsWith('-') || t.startsWith('![') || t.startsWith('<')) continue;
    let text = cleanInline(t);
    if (text.length < 25) continue;
    if (text.length > 180) {
      text = text.slice(0, 180);
      text = text.slice(0, text.lastIndexOf(' ')) + '…';
    }
    return text;
  }
  return '';
}

// Everything in src/ that is NOT part of the mirror (hand-written site files).
// On regeneration the mirror directories are removed and rebuilt from the backup.
const KEEP = new Set([
  'index.md', 'search.md', '404.md', 'css', 'favicon.svg', 'favicons',
  '_includes', '_data', 'icon-64.png', 'apple-touch-icon.png', 'manifest.webmanifest',
  'sitemap.njk', 'robots.njk',
]);

async function main() {
  const backup = await pickBackup(process.argv[2]);
  const meta = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
  const closure = new Set(meta.pages.map((p) => p.path));
  console.log('backup:', backup, 'pages:', meta.pages.length);

  // clean regeneration: remove previous mirror output, keep hand-written files
  await mkdir(SRC, { recursive: true });
  for (const e of await readdir(SRC)) {
    if (KEEP.has(e)) continue;
    await rm(path.join(SRC, e), { recursive: true, force: true });
  }
  console.log('src/ mirror directories cleaned');

  // ---- pass 1: convert everything to markdown ----
  const records = [];
  for (const pg of meta.pages) {
    const html = await readFile(path.join(backup, pg.file), 'utf8');
    const normPath = pg.path.replace(/\/+$/, '');
    const rel = normPath.replace(/^\/+/, '');
    let body;
    let title;
    let crumbs = [];
    const origin = pg.site || 'https://core.telegram.org';
    const trimmed = html.trimStart();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      title = rel.split('/').pop();
      body = 'Machine-readable data from the original site (JSON). View the [original](' + pg.url + ') for context.\n\n```json\n' + html.trim() + '\n```';
    } else {
      let content = extractDiv(html, '<div id="dev_page_content">')
        || extractDiv(html, '<div class="tl_page">');
      if (!content) {
        const m = html.match(/<div class="dev_page_wrap">([\s\S]*?)<div class="footer_wrap">/);
        if (!m) continue;
        let raw = m[1].replace(/<div class="dev_page_head[\s\S]*?<\/div>\s*<\/div>/, '');
        raw = raw.replace(/<[^>]+>/g, '');
        body = '```\n' + decode(raw).trim() + '\n```';
      } else {
        content = stripNoise(content);
        body = td.turndown(content).trim();
      }
      title = extractH1(html) || rel.split('/').pop() || 'Telegram';
      crumbs = extractCrumbs(html).map((c) => ({
        title: c.title,
        url: closure.has(c.url.split('#')[0].replace(/\/+$/, '')) ? (c.url.endsWith('/') ? c.url : c.url + '/') : 'https://core.telegram.org' + c.url,
      }));
    }
    records.push({ pg, normPath, rel, body, title, crumbs, origin });
  }

  const slugsByPath = new Map(records.map((r) => [r.normPath, headingSlugs(r.body)]));

  // ---- link rewriting with anchor validation ----
  const resolveAnchor = (targetSlugs, anchor) => {
    let a = anchor.slice(1);
    if (targetSlugs.has(a)) return a;
    if (a.startsWith('q-') && targetSlugs.has(a.slice(2))) return a.slice(2); // original FAQ anchors
    return null;
  };

  const rewriteLinks = (md, ownPath, origin) =>
    md
      .replace(/!\[([^\]]*)\]\(\/file\//g, '![$1](https://core.telegram.org/file/')
      .replace(/!\[([^\]]*)\]\(\/img\//g, `![$1](${origin}/img/`)
      .replace(/!\[([^\]]*)\]\(\/\//g, '![$1](https://')
      // same-page anchors
      .replace(/\]\((#[^)\s]+)\)/g, (m0, anchor) => {
        const a = resolveAnchor(slugsByPath.get(ownPath) || new Set(), anchor);
        return a === null ? m0 : `](#${a})`;
      })
      // absolute links to core.telegram.org: local when mirrored
      .replace(/\]\(https:\/\/core\.telegram\.org(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
        const np = (p || '/').replace(/\/+$/, '');
        if (!closure.has(np)) return m0;
        if (anchor) {
          const a = resolveAnchor(slugsByPath.get(np) || new Set(), anchor);
          if (a === null) return m0;
          return `](${np}/#${a})`;
        }
        return `](${np}/)`;
      })
      // cross-page relative links
      .replace(/\]\((?!https?:|#)(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
        if (!closure.has(p.replace(/\/+$/, ''))) return `](${origin}${p}${anchor || ''})`;
        if (!anchor) {
          const base = p.endsWith('/') ? p : p + '/';
          return `](${base})`;
        }
        const a = resolveAnchor(slugsByPath.get(p.replace(/\/+$/, '')) || new Set(), anchor);
        if (a === null) return `](${origin}${p}${anchor})`;
        const base = p.endsWith('/') ? p : p + '/';
        return `](${base}#${a})`;
      });

  // ---- pass 2: write files ----
  let written = 0;
  for (const r of records) {
    let body = rewriteLinks(r.body, r.normPath, r.origin);
    // the original <h1> lives outside the content div: restore it so every
    // page has exactly one h1 (a11y/SEO); ignore '#' lines inside code fences
    let inFence = false;
    let hasH1 = false;
    for (const line of body.split('\n')) {
      const t = line.trim();
      if (t.startsWith('```')) {
        inFence = !inFence;
        continue;
      }
      if (!inFence && /^#\s/.test(t)) {
        hasH1 = true;
        break;
      }
    }
    if (!hasH1) body = `# ${r.title}\n\n` + body;
    // table header cells get scope for screen readers
    body = body.replace(/<th(\s|>)/g, '<th scope="col"$1');
    const description = deriveDescription(body);
    const fm = [
      '---',
      `title: "${fmEscape(r.title)}"`,
      `original: "${r.pg.url}"`,
      `section: ${sectionOf(r.normPath)}`,
      ...(description ? [`description: "${fmEscape(description)}"`] : []),
      `crumbs: ${JSON.stringify(r.crumbs)}`,
      'layout: layout.njk',
      '---',
      '',
    ].join('\n');
    const dest = path.join(SRC, r.rel + '.md');
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + '\n' + body + '\n');
    written++;
  }
  console.log('pages written to src/:', written);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
