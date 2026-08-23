// Creates a dated backup of the core.telegram.org documentation sections
// (Telegram API, MTProto protocol, Schema) into backup/<date>/pages/.
//
// Usage: node tools/crawl.mjs [date]     (date defaults to today, YYYY-MM-DD)
//
// The backup is the ONLY source for the site build: tools/extract.mjs reads
// exclusively from backup/<date>/ and never touches the network.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const BASE = 'https://core.telegram.org';
const ROOT = path.resolve('.');

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
const BACKUP = path.join(ROOT, 'backup', date);
const PAGES = path.join(BACKUP, 'pages');

// Sections included in the mirror.
const SEEDS = ['/api', '/mtproto', '/schema'];
const ALLOW_PREFIXES = ['/api', '/mtproto', '/schema', '/constructor/', '/method/', '/type/'];
const ALLOW_EXACT = ['/methods', '/constructors', '/types', '/mtproto_v1'];

const SKIP_PREFIXES = ['/css/', '/js/', '/img/', '/file/', '/fonts/'];

function isAllowed(p) {
  if (SKIP_PREFIXES.some((s) => p.startsWith(s))) return false;
  if (ALLOW_EXACT.includes(p)) return true;
  return ALLOW_PREFIXES.some((s) => (s.endsWith('/') ? p.startsWith(s) : p === s || p.startsWith(s + '/')));
}

function normalize(href) {
  if (!href) return null;
  let url;
  try {
    url = new URL(href, BASE);
  } catch {
    return null;
  }
  if (url.host !== 'core.telegram.org') return null;
  let p = decodeURIComponent(url.pathname);
  if (p === '/' || p === '') return null;
  if (/\.(png|jpe?g|gif|svg|ico|css|js|webp|mp4|pdf|xml)$/i.test(p)) return null;
  return p;
}

function extractLinks(html) {
  const out = new Set();
  const re = /<a\s[^>]*href\s*=\s*"([^"]*)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const p = normalize(m[1]);
    if (p && isAllowed(p)) out.add(p);
  }
  return out;
}

function safeName(p) {
  return p.replace(/^\/+/, '').replace(/\//g, '__') + '.html';
}

async function fetchPage(p, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(BASE + p, {
        headers: { 'User-Agent': 'Mozilla/5.0 (documentation backup)', Accept: 'text/html' },
        redirect: 'follow',
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
}

async function main() {
  await mkdir(PAGES, { recursive: true });
  const seen = new Set();
  const queue = [...SEEDS];
  const manifest = [];
  let fetched = 0;
  let cached = 0;

  while (queue.length) {
    const p = queue.shift();
    if (seen.has(p)) continue;
    seen.add(p);
    const file = safeName(p);
    const full = path.join(PAGES, file);
    let html;
    try {
      const existing = await readFile(full, 'utf8');
      if (existing.length > 200) {
        html = existing;
        cached++;
      } else throw new Error('too small');
    } catch {
      html = await fetchPage(p);
      await writeFile(full, html);
      fetched++;
      await new Promise((r) => setTimeout(r, 120));
    }
    manifest.push({
      url: BASE + p,
      path: p,
      file: 'pages/' + file,
      bytes: Buffer.byteLength(html),
      sha256: createHash('sha256').update(html).digest('hex'),
    });
    if ((fetched + cached) % 100 === 0) console.log('progress:', fetched + cached, 'pages (fetched', fetched, 'cached', cached + ')');
    for (const q of extractLinks(html)) if (!seen.has(q)) queue.push(q);
  }

  manifest.sort((a, b) => a.path.localeCompare(b.path));
  const meta = {
    site: BASE,
    sections: ['Telegram API (/api)', 'MTProto Protocol (/mtproto)', 'Schema (/schema)'],
    date,
    generated_at: new Date().toISOString(),
    page_count: manifest.length,
    pages: manifest,
  };
  await writeFile(path.join(BACKUP, 'manifest.json'), JSON.stringify(meta, null, 1));
  await writeFile(path.join(BACKUP, 'urls.txt'), manifest.map((m) => m.path).join('\n') + '\n');
  console.log('DONE. total:', manifest.length, 'fetched:', fetched, 'cached:', cached, '-> backup/' + date);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
