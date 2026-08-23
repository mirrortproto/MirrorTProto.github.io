import markdownItAnchor from 'markdown-it-anchor';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon.svg': 'favicon.svg' });
  eleventyConfig.addPassthroughCopy({ 'src/favicons': 'favicons' });
  eleventyConfig.addPassthroughCopy({ 'src/icon-64.png': 'icon-64.png' });
  eleventyConfig.addPassthroughCopy({ 'src/apple-touch-icon.png': 'apple-touch-icon.png' });
  eleventyConfig.addPassthroughCopy({ 'src/manifest.webmanifest': 'manifest.webmanifest' });

  // defer offscreen images (content images come from the original markup)
  eleventyConfig.addTransform('img-lazy', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    return content.replace(/<img (?![^>]*loading=)/g, '<img loading="lazy" decoding="async" ');
  });

  // escape for use inside HTML attributes (meta/OG tags)
  eleventyConfig.addFilter('htmlattr', (s) =>
    String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  );

  // Heading anchors (keep Cyrillic/Latin as-is)
  eleventyConfig.amendLibrary('md', (mdLib) =>
    mdLib.use(markdownItAnchor, {
      slugify: (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, ''),
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: '#',
        placement: 'after',
        class: 'header-anchor',
        ariaHidden: true,
      }),
    })
  );

  // Paragraph anchors: every <p> inside <article> gets id="p-N" and a ¶ link
  eleventyConfig.addTransform('paragraph-anchors', (content) => {
    if (typeof content !== 'string' || !content.includes('<article>')) return content;
    const start = content.indexOf('<article>');
    const end = content.indexOf('</article>');
    if (start === -1 || end === -1) return content;
    let n = 0;
    let article = content.slice(start, end);
    article = article.replace(/<p>([\s\S]*?)<\/p>/g, (_m, inner) => {
      n += 1;
      return `<p id="p-${n}">${inner}<a class="p-anchor" href="#p-${n}" aria-label="Link to this paragraph">¶</a></p>`;
    });
    return content.slice(0, start) + article + content.slice(end);
  });

  // HTML minification: collapse whitespace outside <pre> blocks (keeps one
  // space so inline text never sticks together). Runs after other transforms.
  eleventyConfig.addTransform('minify-html', (content, page) => {
    const out = typeof page === 'string' ? page : page && page.outputPath;
    if (typeof content !== 'string' || !out || !out.endsWith('.html')) return content;
    const parts = content.split(/(<pre[\s\S]*?<\/pre>)/g);
    return parts
      .map((part, i) => (i % 2 === 1 ? part : part.replace(/\s*\n+\s*/g, ' ').replace(/ {2,}/g, ' ')))
      .join('');
  });

  eleventyConfig.addCollection('pages', (collectionApi) =>
    collectionApi.getAll().filter((i) => i.data.section && i.inputPath.includes('/src/'))
  );

  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
    // markdown must NOT pass through a templating engine: mirrored content
    // contains literal {{ }} sequences that would break Nunjucks/Liquid.
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
  };
}
