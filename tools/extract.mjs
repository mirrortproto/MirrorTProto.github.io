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
  const m = html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/);
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
  return 'api';
}

function fmEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
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
    let text = t
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/`/g, '')
      .replace(/\*\*/g, '');
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

  // link rewriting: local for pages in the backup, absolute core.telegram.org otherwise
  const rewriteLinks = (md) =>
    md
      .replace(/!\[([^\]]*)\]\(\/file\//g, '![$1](https://core.telegram.org/file/')
      .replace(/!\[([^\]]*)\]\(\/img\//g, '![$1](https://core.telegram.org/img/')
      .replace(/!\[([^\]]*)\]\(\/\//g, '![$1](https://')
      .replace(/\]\((?!https?:|#)(\/[^)#\s]*)(#[^)\s]*)?\)/g, (_m, p, a) => {
        if (closure.has(p)) {
          const base = p.endsWith('/') ? p : p + '/';
          return `](${base}${a || ''})`;
        }
        return `](https://core.telegram.org${p}${a || ''})`;
      });

  let written = 0;
  const skipped = [];
  const seenPaths = new Set();
  for (const pg of meta.pages) {
    // trailing-slash duplicates ("/x/" when "/x" exists) collapse to one page
    const normPath = pg.path.replace(/\/+$/, '');
    if (seenPaths.has(normPath)) continue;
    seenPaths.add(normPath);
    const html = await readFile(path.join(backup, pg.file), 'utf8');
    const rel = normPath.replace(/^\/+/, '');
    const trimmed = html.trimStart();
    let body;
    let title;
    let crumbs = [];
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      // raw data pages (machine-readable JSON dumps)
      title = rel.split('/').pop();
      body = 'Machine-readable data from the original site (JSON). View the [original](' + pg.url + ') for context.\n\n```json\n' + html.trim() + '\n```';
    } else {
      let content = extractDiv(html, '<div id="dev_page_content">');
      if (!content) {
        const m = html.match(/<div class="dev_page_wrap">([\s\S]*?)<div class="footer_wrap">/);
        if (!m) {
          skipped.push(pg.path);
          continue;
        }
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
        url: closure.has(c.url.split('#')[0]) ? (c.url.endsWith('/') ? c.url : c.url + '/') : 'https://core.telegram.org' + c.url,
      }));
    }
    body = rewriteLinks(body);
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
    if (!hasH1) body = `# ${title}\n\n` + body;
    // table header cells get scope for screen readers
    body = body.replace(/<th(\s|>)/g, '<th scope="col"$1');
    const description = deriveDescription(body);
    const fm = [
      '---',
      `title: "${fmEscape(title)}"`,
      `original: "${pg.url}"`,
      `section: ${sectionOf(normPath)}`,
      ...(description ? [`description: "${fmEscape(description)}"`] : []),
      `crumbs: ${JSON.stringify(crumbs)}`,
      'layout: layout.njk',
      '---',
      '',
    ].join('\n');
    const dest = path.join(SRC, rel + '.md');
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + '\n' + body + '\n');
    written++;
  }
  console.log('pages written to src/:', written);
  if (skipped.length) console.log('skipped:', skipped.join(', '));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
