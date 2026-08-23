// Site self-check for maintainers: validates the built docs/ and the src/ link graph.
// Usage: npm run check   (run after npm run build)
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error('FAIL:', msg);
};
const ok = (msg) => console.log('ok  :', msg);

// ---- src link graph ----
function localExists(p) {
  const base = path.join(SRC, p.replace(/\/+$/, ''));
  return stat(base + '.md').then(() => true).catch(() => stat(path.join(base, 'index.md')).then(() => true).catch(() => false));
}

async function walk(dir, ext) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext)));
    else if (!ext || e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

const mdFiles = await walk(SRC, '.md');
let links = 0;
let broken = 0;
for (const f of mdFiles) {
  const text = await readFile(f, 'utf8');
  for (const m of text.matchAll(/\]\((\/[^)#\s]*)/g)) {
    links++;
    if (!(await localExists(m[1]))) {
      broken++;
      if (broken <= 5) fail(`broken link ${m[1]} in ${path.relative(SRC, f)}`);
    }
  }
}
if (!broken) ok(`local links: ${links}, all resolve`);

// ---- built pages ----
const pages = (await walk(DOCS)).filter((f) => f.endsWith('.html'));
let h1bad = 0;
let metaBad = 0;
for (const f of pages) {
  const h = await readFile(f, 'utf8');
  const rel = path.relative(DOCS, f);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) {
    h1bad++;
    if (h1bad <= 5) fail(`h1 count != 1 in ${rel}`);
  }
  if (!h.includes('class="skip-link"') || !h.includes('rel="canonical"') || !h.includes('<html lang="en">')) {
    metaBad++;
    if (metaBad <= 5) fail(`missing skip-link/canonical/lang in ${rel}`);
  }
}
if (!h1bad) ok(`h1: exactly one on all ${pages.length} pages`);
if (!metaBad) ok('skip-link/canonical/lang present on all pages');

// ---- sitemap & robots ----
const sitemap = await readFile(path.join(DOCS, 'sitemap.xml'), 'utf8').catch(() => '');
const urls = (sitemap.match(/<loc>/g) || []).length;
if (urls >= pages.length - 1) ok(`sitemap.xml: ${urls} urls`);
else fail(`sitemap.xml missing or too small (${urls})`);
const robots = await readFile(path.join(DOCS, 'robots.txt'), 'utf8').catch(() => '');
if (robots.includes('Sitemap:')) ok('robots.txt references sitemap');
else fail('robots.txt missing or without Sitemap');

console.log(failures ? `\n${failures} problem(s) found` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
