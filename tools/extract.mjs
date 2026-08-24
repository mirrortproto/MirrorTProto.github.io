// Builds Eleventy sources (src/) exclusively from the dated backup in backup/<date>/.
// NO network access here — the backup is the single source of truth.
//
// Usage: node tools/extract.mjs [date]   (defaults to the newest backup)
import { mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';
import * as prettier from 'prettier';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');

async function pickBackup(arg) {
  const dir = path.join(ROOT, 'backup');
  if (arg) return path.join(dir, arg);
  const dates = (await readdir(dir)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  if (!dates.length) throw new Error('no backup found: run tools/crawl.mjs first');
  return path.join(dir, dates[dates.length - 1]);
}

// Returns { html, end } for the div introduced by `marker`, where `end` is the
// offset just past its closing tag (needed to look at what follows the div).
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
    if (depth === 0) return { html: html.slice(tagStart, m.index + 6), end: m.index + 6 };
  }
  return null;
}

// The layer selector itself cannot be mirrored — the older layers it links to
// were never crawled — but the layer it names is content, not chrome: it is the
// only thing on the page that says *which* version of the TL-schema is shown.
// The dropdown is dropped by stripNoise(); this keeps its label.
function layerLabel(html) {
  const m = html.match(/dev_layer_select[\s\S]*?<a class="dropdown-toggle"[^>]*>([^<]*)<b class="caret">/);
  return m ? decode(m[1]).trim() : '';
}

// On /schema and /schema/end-to-end the TL-schema listing is a *sibling* of the
// content div, not a child of it — so taking the div alone dropped the entire
// schema, i.e. the only reason those two pages exist. Collect every
// <pre class="page_scheme"> between the end of the content div and the footer.
function trailingSchemes(html, contentEnd) {
  const stop = html.indexOf('<div class="footer_wrap">', contentEnd);
  const tail = html.slice(contentEnd, stop === -1 ? undefined : stop);
  const blocks = tail.match(/<pre class="page_scheme">[\s\S]*?<\/pre>/g);
  return blocks ? blocks.join('\n') : '';
}

function extractH1(html) {
  const m = html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/)
    || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return decode(m[1].replace(/<[^>]+>/g, '')).trim();
}

// The original pages carry their own heading anchors
// (<h3><a class="anchor" id="…">). Telegram deletes punctuation where our
// slugger replaces it with "-", so ~3% of the ids differ ("messages.report" is
// `messagesreport` there and `messages-report` here). Links written against the
// original ids used to be downgraded to off-site links; this map lets them be
// resolved to the local heading instead.
function originalAnchors(html) {
  const map = new Map();
  const re = /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const id = m[2].match(/<a class="anchor"[^>]*\sid="([^"]*)"/);
    if (!id) continue;
    const text = decode(m[2].replace(/<[^>]+>/g, '')).trim();
    if (text) map.set(id[1], slugify(cleanInline(text)));
  }
  return map;
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

// Percent-escapes have to be undone before a path can be looked up in the
// closure (which holds decoded paths such as "/type/Vector t" and "/type/#")
// and redone before the path is emitted. Both run per segment: decodeURI would
// leave the reserved "%23" of the TL "#" type alone, and a whole-path
// encodeURIComponent would swallow the separators. A malformed escape in the
// source is left exactly as it was.
const decodePath = (p) =>
  p
    .split('/')
    .map((s) => {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    })
    .join('/');
const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/');

function decode(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—').replace(/&amp;/g, '&');
}

// ---- raw JSON endpoints --------------------------------------------------
// The original serves these as one endless line, which no browser can display
// usefully. Prettier's `json` parser prints from the concrete syntax tree, so
// (unlike JSON.parse + JSON.stringify) it neither reorders integer-like keys —
// JS would sort "400", "401" … ahead of every string key in errors.json — nor
// renormalises number literals such as 1e-3. printWidth 1 forbids the "collapse
// short objects onto one line" heuristic, giving the fully expanded layout a
// reader expects.
async function beautifyJson(src) {
  return (await prettier.format(src, { parser: 'json', printWidth: 1, tabWidth: 2 })).trim();
}

function stripNoise(html) {
  let h = html.replace(/<script[\s\S]*?<\/script>/g, '');
  // Layer selector dropdown: a control over layers that were never crawled.
  // Its label survives separately — see layerLabel().
  h = h.replace(/<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g, '');
  // heading anchor icons (we generate our own anchors)
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, '');
  return h;
}

// ---- turndown ----
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
// Turndown decodes entities in text nodes, so `Vector&lt;int&gt;` from the source
// would land in the markdown as a bare `Vector<int>`, and markdown-it (HTML
// enabled) parses `<int>` back into an element — silently swallowing the type
// name that the original page displayed. Re-escape `<`: markdown-it passes the
// entity through untouched, so the reader sees the literal text again.
// Turndown routes only non-code text nodes through escape(), and the raw-HTML
// rules below use `replacement`, so code blocks and kept markup are unaffected.
const escapeMarkdown = td.escape.bind(td);
td.escape = (s) => escapeMarkdown(s).replace(/</g, '&lt;');
td.addRule('preCode', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_c, node) => '\n\n```\n' + node.textContent.replace(/\n+$/, '') + '\n```\n\n',
});
// TL-schema listings (<pre class="page_scheme">) are the one code block on the
// original site whose identifiers are hyperlinks — every type, constructor and
// method in the line links to its own reference page. A fenced block keeps the
// text but throws all of that away, so these are emitted as raw HTML instead:
// markdown-it passes an HTML block through untouched and rewriteLinks() below
// then localises the hrefs exactly as it does for the rest of the page.
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');

function schemeHtml(node) {
  let out = '';
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      out += escText(child.nodeValue);
    } else if (child.nodeName === 'A') {
      // The source markup is `<a  href="/type/int" >int</a>` — normalised here;
      // `current_page_link` (the entry describing the page you are on) is kept
      // because the original renders it as plain, non-clickable text.
      const href = child.getAttribute('href') || '';
      const current = /(^|\s)current_page_link(\s|$)/.test(child.getAttribute('class') || '');
      out += `<a href="${escAttr(href)}"${current ? ' class="current_page_link"' : ''}>` +
        schemeHtml(child) + '</a>';
    } else {
      out += schemeHtml(child);
    }
  }
  return out;
}

// Registered after preCode on purpose: Turndown checks the most recently added
// rule first, so this one wins for <pre class="page_scheme">.
td.addRule('pageScheme', {
  filter: (node) =>
    node.nodeName === 'PRE' && /(^|\s)page_scheme(\s|$)/.test(node.getAttribute('class') || ''),
  replacement: (_c, node) => {
    const code = node.querySelector('code') || node;
    return '\n\n<pre class="page_scheme"><code>' +
      schemeHtml(code).replace(/^\n+|\s+$/g, '') + '</code></pre>\n\n';
  },
});
// keep <img> as raw HTML so width/height/class/style (floats) survive
td.addRule('imgRaw', {
  filter: 'img',
  replacement: (_c, node) => node.outerHTML,
});
// keep image/caption wrappers as raw HTML so their classes survive
td.addRule('rawMediaDivs', {
  filter: (node) =>
    node.nodeName === 'DIV' &&
    /blog_(image_wrap|video_player_wrap|2images_wrap|3images_wrap|medium_image_wrap)/.test(node.getAttribute('class') || ''),
  replacement: (_c, node) => '\n\n' + node.outerHTML + '\n\n',
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

// The five machine-readable endpoints are served as bare JSON: no <h1>, no
// breadcrumbs, nothing a mirror could extract. The titles below are the wording
// the original site itself uses when it links to them, and the trails follow the
// breadcrumbs of the article each endpoint belongs to.
const JSON_NOTE =
  'The original serves this document as a single line of JSON. It is reproduced ' +
  'here verbatim — only the indentation was added, so that it can be read in a browser.';
const crumb = (title, url) => ({ title, url });
const API = crumb('API', '/api/');
const JSON_DOCS = {
  '/schema/json': {
    title: 'TL-Schema in JSON',
    crumbs: [API, crumb('Schema', '/schema/'), crumb('TL-Schema in JSON', '/schema/json/')],
  },
  '/schema/mtproto-json': {
    title: 'MTProto TL-Schema in JSON',
    crumbs: [
      crumb('Mobile Protocol', '/mtproto/'),
      crumb('Current MTProto TL-schema', '/schema/mtproto/'),
      crumb('MTProto TL-Schema in JSON', '/schema/mtproto-json/'),
    ],
  },
  '/schema/end-to-end-json': {
    title: 'End-to-end TL-Schema in JSON',
    crumbs: [
      API,
      crumb('Secret chats', '/api/end-to-end/'),
      crumb('Current end-to-end TL-schema', '/schema/end-to-end/'),
      crumb('End-to-end TL-Schema in JSON', '/schema/end-to-end-json/'),
    ],
  },
  '/api/config.json': {
    title: 'config.json',
    crumbs: [API, crumb('Client configuration', '/api/config/'), crumb('config.json', '/api/config.json/')],
  },
  '/api/errors.json': {
    title: 'errors.json',
    crumbs: [API, crumb('Error handling', '/api/errors/'), crumb('errors.json', '/api/errors.json/')],
  },
};

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

  const inClosure = (u) => closure.has(decodePath(u.split('#')[0]).replace(/\/+$/, ''));
  const localUrl = (u) => encodePath(decodePath(u.split('#')[0]).replace(/\/+$/, '') + '/');

  // clean regeneration: remove previous mirror output, keep hand-written files
  await mkdir(SRC, { recursive: true });
  for (const e of await readdir(SRC)) {
    if (KEEP.has(e)) continue;
    await rm(path.join(SRC, e), { recursive: true, force: true });
  }
  console.log('src/ mirror directories cleaned');

  // ---- pass 1: convert everything to markdown ----
  const records = [];
  const anchorsByPath = new Map();
  for (const pg of meta.pages) {
    const html = await readFile(path.join(backup, pg.file), 'utf8');
    const normPath = pg.path.replace(/\/+$/, '');
    const rel = normPath.replace(/^\/+/, '');
    let body;
    let title;
    let crumbs = [];
    const origin = pg.site || 'https://core.telegram.org';
    const trimmed = html.trimStart();
    const isJson = trimmed.startsWith('{') || trimmed.startsWith('[');
    if (isJson) {
      const doc = JSON_DOCS[normPath];
      title = doc ? doc.title : rel.split('/').pop();
      crumbs = doc ? doc.crumbs : [];
      body = '# ' + title + '\n\n' + JSON_NOTE + '\n\n```json\n' + (await beautifyJson(html.trim())) + '\n```';
    } else {
      const found = extractDiv(html, '<div id="dev_page_content">')
        || extractDiv(html, '<div class="tl_page">');
      if (!found) {
        const m = html.match(/<div class="dev_page_wrap">([\s\S]*?)<div class="footer_wrap">/);
        if (!m) continue;
        let raw = m[1].replace(/<div class="dev_page_head[\s\S]*?<\/div>\s*<\/div>/, '');
        raw = raw.replace(/<[^>]+>/g, '');
        body = '```\n' + decode(raw).trim() + '\n```';
      } else {
        const content = stripNoise(found.html + trailingSchemes(html, found.end));
        body = td.turndown(content).trim();
        const layer = layerLabel(html);
        if (layer) {
          body = body.replace(
            /(^|\n)(<pre class="page_scheme">)/,
            `$1<p class="page_layer">${layer}</p>\n\n$2`
          );
        }
      }
      title = extractH1(html) || rel.split('/').pop() || 'Telegram';
      crumbs = extractCrumbs(html).map((c) => ({
        title: c.title,
        url: inClosure(c.url) ? localUrl(c.url) : 'https://core.telegram.org' + c.url,
      }));
      anchorsByPath.set(normPath, originalAnchors(html));
    }
    records.push({ pg, normPath, rel, body, title, crumbs, origin, isJson });
  }

  const slugsByPath = new Map(records.map((r) => [r.normPath, headingSlugs(r.body)]));

  // ---- link rewriting with anchor validation ----
  // `null` = unresolvable (the link must stay/become an off-site link),
  // `''`   = the link carried an empty `#`, which simply drops away.
  const resolveAnchor = (targetPath, anchor) => {
    const targetSlugs = slugsByPath.get(targetPath) || new Set();
    const a = anchor.slice(1);
    if (!a) return '';
    if (targetSlugs.has(a)) return a;
    if (a.startsWith('q-') && targetSlugs.has(a.slice(2))) return a.slice(2); // original FAQ anchors
    const mapped = (anchorsByPath.get(targetPath) || new Map()).get(a);
    if (mapped && targetSlugs.has(mapped)) return mapped;
    return null;
  };

  // Resolve a site-relative path to its local URL, or to null when the target is
  // outside the mirrored closure. Percent-escapes matter: the closure holds
  // decoded paths ("/type/Vector t") while links carry encoded ones
  // ("/type/Vector%20t"), and the emitted URL has to be encoded again.
  const target = (p, anchor) => {
    const decoded = decodePath(p).replace(/\/+$/, '');
    if (!closure.has(decoded)) return null;
    const a = anchor ? resolveAnchor(decoded, anchor) : '';
    if (a === null) return null;
    return encodePath(decoded + '/') + (a ? '#' + a : '');
  };

  const rewriteLinks = (md, ownPath, origin) =>
    md
      .replace(/<img([^>]*?)src="\/file\//g, `<img$1src="${origin}/file/`)
      .replace(/<img([^>]*?)src="\/img\//g, `<img$1src="${origin}/img/`)
      .replace(/<img([^>]*?)src="\/\//g, '<img$1src="https://')
      .replace(/(<a[^>]*?)href="\/file\//g, `$1href="${origin}/file/`)
      .replace(/(<a[^>]*?)href="\/img\//g, `$1href="${origin}/img/`)
      .replace(/(<a[^>]*?)href="\/\//g, '$1href="https://')
      .replace(/(<(?:source|video|img)[^>]*?)src="\/file\//g, `$1src="${origin}/file/`)
      .replace(/(<video[^>]*?)poster="\/file\//g, `$1poster="${origin}/file/`)
      .replace(/!\[([^\]]*)\]\(\/file\//g, `![$1](${origin}/file/`)
      .replace(/!\[([^\]]*)\]\(\/img\//g, `![$1](${origin}/img/`)
      .replace(/!\[([^\]]*)\]\(\/\//g, '![$1](https://')
      // Hrefs kept as raw HTML — tables and the TL-schema blocks. Site-relative
      // ones used to stay extension-less (a redirect per link on GitHub Pages)
      // and, for the ~200 pointing outside the mirror, they 404'd; absolute ones
      // left the mirror even when the target is part of it.
      .replace(/(<a\b[^>]*?)href="https:\/\/core\.telegram\.org(\/[^"#]*)(#[^"]*)?"/g,
        (m0, head, p, anchor) => {
          const local = target(p, anchor);
          return local === null ? m0 : `${head}href="${local}"`;
        })
      .replace(/(<a\b[^>]*?)href="(\/[^"#]*)(#[^"]*)?"/g, (m0, head, p, anchor) => {
        const local = target(p, anchor);
        return `${head}href="${local === null ? origin + p + (anchor || '') : local}"`;
      })
      // same-page anchors
      .replace(/\]\((#[^)\s]+)\)/g, (m0, anchor) => {
        const a = resolveAnchor(ownPath, anchor);
        return a === null ? m0 : `](${a ? '#' + a : '#'})`;
      })
      // absolute links to core.telegram.org: local when mirrored
      .replace(/\]\(https:\/\/core\.telegram\.org(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
        const local = target(p || '/', anchor);
        return local === null ? m0 : `](${local})`;
      })
      // cross-page relative links
      .replace(/\]\((?!https?:|#)(\/[^)#\s]*)(#[^)\s]*)?\)/g, (m0, p, anchor) => {
        const local = target(p, anchor);
        return `](${local === null ? origin + p + (anchor || '') : local})`;
      });

  // ---- pass 2: write files ----
  let written = 0;
  for (const r of records) {
    // A JSON document is data, not prose: rewriting "links" inside it would
    // corrupt the very bytes the page exists to reproduce.
    let body = r.isJson ? r.body : rewriteLinks(r.body, r.normPath, r.origin);
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
    if (!r.isJson) body = body.replace(/<th(\s|>)/g, '<th scope="col"$1');
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
