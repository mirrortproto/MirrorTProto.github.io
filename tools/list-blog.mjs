#!/usr/bin/env node
// Walks the blog archive of telegram.org and writes every post it lists into
// tools/extra-pages.json (group "Blog"), so the mirror holds the blog whole
// rather than only the posts other pages happen to link to.
//
//   node tools/list-blog.mjs        # discover posts, extend the list
//   npm run backup -- <date>        # fetch the new ones
//
// The archive pages themselves are not mirrored: they are a *view* of the blog
// — twenty posts and a "next" link — and the mirror shows the same posts in the
// Blog menu, newest first, without pagination.
import fs from 'node:fs';
import path from 'node:path';
import { setDefaultResultOrder } from 'node:dns';

setDefaultResultOrder('ipv6first'); // same reason as in tools/crawl.mjs

const ROOT = path.resolve('.');
const EXTRA = path.join(ROOT, 'tools', 'extra-pages.json');
const INDEX = 'https://telegram.org/blog';
const STEP = 20;

const fetchPage = async (url) => {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (documentation backup)',
          Accept: 'text/html',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (e) {
      if (i === 2) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
};

const posts = new Set();
let offset = 0;
// An offset past the end does not 404 — the archive simply serves its first
// page again. Two stops guard against that: the "next" link has to be there,
// and the page has to bring at least one post that was not seen before.
for (;;) {
  const url = offset ? `${INDEX}?offset=${offset}` : INDEX;
  const html = await fetchPage(url);
  const found = [...new Set([...html.matchAll(/href="(\/blog\/[A-Za-z0-9._-]+)"/g)].map((m) => m[1]))];
  const fresh = found.filter((p) => !posts.has(p));
  for (const p of found) posts.add(p);
  const hasNext = html.includes(`offset=${offset + STEP}"`);
  console.log(`${url} → ${found.length} posts (${fresh.length} new), total ${posts.size}`);
  if (!hasNext || !fresh.length) break;
  offset += STEP;
  await new Promise((r) => setTimeout(r, 150));
}

const extra = JSON.parse(fs.readFileSync(EXTRA, 'utf8'));
const ruledOut = new Set(Object.keys(extra.not_mirrored || {}));
const langs = new Set(extra.language_codes || []);
const before = new Set(extra.groups.Blog || []);
const urls = [...posts]
  .map((p) => 'https://telegram.org' + p)
  .filter((u) => !ruledOut.has(u))
  .filter((u) => {
    const seg = new URL(u).pathname.split('/').pop();
    return !(langs.has(seg) && seg !== 'en');
  });

extra.groups.Blog = [...new Set([...before, ...urls])].sort();
fs.writeFileSync(EXTRA, JSON.stringify(extra, null, 1) + '\n');

const added = extra.groups.Blog.filter((u) => !before.has(u));
console.log(`\narchive: ${posts.size} posts listed, ${added.length} new to the mirror`);
console.log(`extra-pages.json Blog: ${before.size} → ${extra.groups.Blog.length}`);
