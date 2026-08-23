// Generates src/_data/nav.json (sidebar menu) and src/_data/site.json
// by scanning the pages in src/.
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');

function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return fm;
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}

const pages = [];
for await (const f of walk(SRC)) {
  const fm = parseFm(await readFile(f, 'utf8'));
  if (!fm.title) continue;
  const rel = '/' + path.relative(SRC, f).replace(/\.md$/, '').replace(/\\/g, '/');
  const url = rel === '/index' ? '/' : rel.endsWith('/index') ? rel.slice(0, -5) : rel + '/';
  pages.push({ url, title: fm.title, section: fm.section || 'other' });
}

const byUrl = new Map(pages.map((p) => [p.url, p]));
const pick = (urls) => urls.map((u) => byUrl.get(u)).filter(Boolean);

// MTProto protocol articles (curated order, then the rest by url)
const mtprotoCore = [
  '/mtproto/', '/mtproto/description/', '/mtproto/auth_key/', '/mtproto/samples-auth_key/',
  '/mtproto/security_guidelines/', '/mtproto/serialize/', '/mtproto/service_messages/',
  '/mtproto/service_messages_about_messages/', '/mtproto/transports/', '/mtproto/mtproto-transports/',
  '/mtproto/TL/', '/mtproto_v1/',
];
const mtprotoItems = pick(mtprotoCore);
for (const p of pages.filter((p) => (p.url.startsWith('/mtproto/') || p.url.startsWith('/techfaq')) && !mtprotoCore.includes(p.url)).sort((a, b) => a.url.localeCompare(b.url))) {
  mtprotoItems.push(p);
}

// API articles sorted by url (index first)
const apiItems = pages
  .filter((p) => p.section === 'api')
  .sort((a, b) => (a.url === '/api/' ? -1 : b.url === '/api/' ? 1 : a.url.localeCompare(b.url)));

// Schema group: overview pages + reference indexes (individual ref pages stay out of the menu)
const schemaCore = ['/schema/', '/schema/mtproto/', '/schema/end-to-end/', '/methods/', '/schema/json/', '/schema/mtproto-json/', '/schema/end-to-end-json/'];
const schemaItems = pick(schemaCore);
schemaItems.push(
  { url: '/constructor/', title: 'Constructors (reference)' },
  { url: '/method/', title: 'Methods (reference)' },
  { url: '/type/', title: 'Types (reference)' }
);

const sections = [
  { key: 'api', title: 'Telegram API', items: apiItems },
  { key: 'mtproto', title: 'MTProto Protocol', items: mtprotoItems },
  { key: 'schema', title: 'Schema', items: schemaItems },
];

await mkdir(path.join(SRC, '_data'), { recursive: true });
await writeFile(path.join(SRC, '_data', 'nav.json'), JSON.stringify({ sections }, null, 1));

// backup date for the footer
let backupDate = 'unknown';
try {
  const dates = (await readdir(path.join(ROOT, 'backup'))).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  backupDate = dates[dates.length - 1];
} catch {}
await writeFile(path.join(SRC, '_data', 'site.json'), JSON.stringify({ backup_date: backupDate }, null, 1));

console.log('nav: MTProto', mtprotoItems.length, '| API', apiItems.length, '| Schema', schemaItems.length, '| backup', backupDate);
