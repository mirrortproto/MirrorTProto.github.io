// Generates alphabetical index pages for the schema reference:
// src/constructor/index.md, src/method/index.md, src/type/index.md
// Run AFTER tools/extract.mjs.
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('src');

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

const KINDS = [
  ['constructor', 'Constructors', 'https://core.telegram.org/schema'],
  ['method', 'Methods', 'https://core.telegram.org/schema'],
  ['type', 'Types', 'https://core.telegram.org/schema'],
];

for (const [kind, label, original] of KINDS) {
  const dir = path.join(SRC, kind);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.md') && f !== 'index.md').sort((a, b) => a.localeCompare(b));
  const lines = [
    '---',
    `title: "${label} — TL schema reference"`,
    `original: "${original}"`,
    'section: schema',
    'layout: layout.njk',
    '---',
    '',
    `# ${label}`,
    '',
    `All ${kind}s of the TL schema (${files.length}). Names link to pages with the full definition, parameters and description.`,
    '',
  ];
  for (const f of files) {
    const fm = parseFm(await readFile(path.join(dir, f), 'utf8'));
    const name = f.replace(/\.md$/, '');
    lines.push(`- [${fm.title || name}](${name}/)`);
  }
  await writeFile(path.join(dir, 'index.md'), lines.join('\n') + '\n');
  console.log(kind, 'index:', files.length);
}
