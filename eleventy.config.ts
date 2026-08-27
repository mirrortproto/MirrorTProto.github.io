import markdownItAnchor from "markdown-it-anchor";
import { minify as minifyHtml } from "html-minifier-terser";
import { transform as transformCss } from "lightningcss";

type OutputPage = string | { outputPath?: string } | undefined;
type CollectionItem = { data: { section?: string }; inputPath: string };
type MarkdownLibrary = {
  use(
    plugin: typeof markdownItAnchor,
    options: Record<string, unknown>,
  ): MarkdownLibrary;
};
type EleventyConfig = {
  setUseGitIgnore(value: boolean): void;
  addTemplateFormats(format: string): void;
  addExtension(
    format: string,
    extension: {
      outputFileExtension: string;
      compile(inputContent: string, inputPath: string): () => Promise<string>;
    },
  ): void;
  addPassthroughCopy(mapping: Record<string, string>): void;
  addTransform(
    name: string,
    transform: (content: string, page?: OutputPage) => string | Promise<string>,
  ): void;
  addFilter<T extends (...args: never[]) => unknown>(
    name: string,
    filter: T,
  ): void;
  amendLibrary(
    name: string,
    amend: (library: MarkdownLibrary) => MarkdownLibrary,
  ): void;
  addCollection(
    name: string,
    factory: (api: { getAll(): CollectionItem[] }) => CollectionItem[],
  ): void;
};

export default function (eleventyConfig: EleventyConfig) {
  // crawled/ is intentionally ignored by Git but is Eleventy's generated input.
  eleventyConfig.setUseGitIgnore(false);

  // style.css is compiled instead of copied, so it can be minified. It is kept
  // out of collections by crawled/css/css.11tydata.json — otherwise sitemap.njk,
  // which walks collections.all, would list the stylesheet as a page.
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: (inputContent, inputPath) => async () => {
      const { code } = transformCss({
        filename: inputPath,
        code: Buffer.from(inputContent),
        minify: true,
      });
      return code.toString();
    },
  });
  eleventyConfig.addPassthroughCopy({ "crawled/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "crawled/favicons": "favicons" });
  eleventyConfig.addPassthroughCopy({ "crawled/icon-64.png": "icon-64.png" });
  eleventyConfig.addPassthroughCopy({
    "crawled/apple-touch-icon.png": "apple-touch-icon.png",
  });
  eleventyConfig.addPassthroughCopy({
    "crawled/manifest.webmanifest": "manifest.webmanifest",
  });
  eleventyConfig.addPassthroughCopy({ "crawled/js": "js" });

  // images: every <img> (standalone or linked) is wrapped into a .img-box
  // placeholder that shows a broken-image icon + the original alt/title text
  // until the image actually loads (then JS adds .img-ok and hides the chip).
  const entDecode = (s: string): string =>
    s
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&");
  const entEncode = (s: string): string =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  // The broken-image glyph used to be inlined into every placeholder chip: four
  // SVG nodes and ~430 bytes duplicated per occurrence. It now lives once in
  // style.css as a mask on .img-alt::before, so the chip carries no icon markup
  // at all and still tints itself with currentColor for the dark theme.

  function boxWrap(innerHtml: string, imgTag: string): string {
    const attr = (n: string): string | null => {
      const m = imgTag.match(new RegExp("\\s" + n + '="([^"]*)"'));
      return m ? m[1] : null;
    };
    const width = parseInt(attr("width") || "", 10);
    const height = parseInt(attr("height") || "", 10);
    const cls = attr("class") || "";
    const style = attr("style") || "";
    const text = entDecode(attr("alt") || attr("title") || "").trim();
    const icon =
      /(^|\s)(icon|emoji)(\s|$)/.test(cls) || (width > 0 && width <= 40);

    const boxDecls: string[] = [];
    const imgDecls: string[] = [];
    for (const d of style
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean)) {
      const prop = (d.split(":")[0] ?? "").trim().toLowerCase();
      if (
        /^(float|max-width|margin|margin-(top|bottom|left|right))$/.test(prop)
      )
        boxDecls.push(d);
      else imgDecls.push(d);
    }
    if (width > 0 && !icon) boxDecls.push("width:" + width + "px");
    if (height > 0) boxDecls.push("height:" + height + "px");

    let img = imgTag.replace(/\s*(width|height|style)="[^"]*"/g, "");
    if (imgDecls.length) {
      const st = ' style="' + entEncode(imgDecls.join(";")) + '"';
      img = img.endsWith("/>")
        ? img.slice(0, -2) + st + "/>"
        : img.slice(0, -1) + st + ">";
    }
    // NOTE: no loading="lazy" here — a lazy image hidden with display:none
    // never starts loading, so the placeholder would never resolve.
    if (!/decoding=/.test(img))
      img = img.replace(/^<img/, '<img decoding="async"');
    // Load/failure signals are wired by the capture-phase listener in layout.njk
    // (fires at the same moment an inline on* handler would). Inline handlers are
    // deliberately NOT emitted: Instant View drops nodes carrying inline JS.

    const chip =
      '<span class="img-alt" aria-hidden="true">' +
      (text ? "<span>" + entEncode(text) + "</span>" : "") +
      "</span>";
    const boxStyle = boxDecls.length
      ? ' style="' + entEncode(boxDecls.join(";")) + '"'
      : "";
    const sticker = /\bdev_page_tgsticker\b/.test(imgTag);
    return (
      '<span class="img-box' +
      (icon ? " img-icon" : "") +
      (sticker ? " img-tgsticker" : "") +
      '"' +
      boxStyle +
      ">" +
      innerHtml.replace(imgTag, img) +
      chip +
      "</span>"
    );
  }

  eleventyConfig.addTransform("img-enhance", (content, page) => {
    const out = typeof page === "string" ? page : page && page.outputPath;
    if (typeof content !== "string" || !out || !out.endsWith(".html"))
      return content;
    const stash: string[] = [];
    // videos: same placeholder principle as images
    let s = content.replace(/<video\b[\s\S]*?<\/video>/g, (v0) => {
      let v = v0.replace(/\s*onclick="[^"]*"/g, ""); // original player JS is not mirrored
      const attr = (n: string): string | null => {
        const m = v.match(new RegExp("\\s" + n + '="([^"]*)"'));
        return m ? m[1] : null;
      };
      const text = entDecode(attr("title") || attr("alt") || "Video").trim();
      // signals wired by the capture-phase listener in layout.njk (see boxWrap)
      const chip =
        '<span class="img-alt" aria-hidden="true">' +
        "<span>" +
        entEncode(text) +
        "</span></span>";
      stash.push('<span class="img-box img-video">' + v + chip + "</span>");
      return "\x00" + (stash.length - 1) + "\x00";
    });
    s = s.replace(/<a\b[^>]*><img\b[^>]*><\/a>/g, (m0) => {
      const img = m0.match(/<img\b[^>]*>/)?.[0];
      if (!img) return m0;
      stash.push(boxWrap(m0, img));
      return "\x00" + (stash.length - 1) + "\x00";
    });
    s = s.replace(/<img\b[^>]*>/g, (img) => {
      stash.push(boxWrap(img, img));
      return "\x00" + (stash.length - 1) + "\x00";
    });
    return s.replace(/\x00(\d+)\x00/g, (_m, i) => stash[+i]);
  });

  // escape for use inside HTML attributes (meta/OG tags)
  eleventyConfig.addFilter("htmlattr", (s: unknown) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;"),
  );
  eleventyConfig.addFilter("sortByUrl", (pages: Array<{ url: string }>) =>
    [...pages].sort((a, b) => a.url.localeCompare(b.url)),
  );
  eleventyConfig.addFilter(
    "breadcrumbJson",
    (crumbs: Array<{ title: string; url: string }>) =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.title,
          item: crumb.url.startsWith("http")
            ? crumb.url
            : `https://mirrortproto.github.io${crumb.url}`,
        })),
      }).replace(/</g, "\\u003c"),
  );

  // A handful of TL pages carry characters that are not URL-safe: `/type/Vector t`
  // has a space and `/type/#` is literally the TL "nat" type. page.url reports
  // them verbatim, which would put a raw space into <link rel="canonical"> and
  // into <loc>, and would cut `/type/#/` short at the fragment. Encoding runs per
  // segment so the separators survive.
  eleventyConfig.addFilter("urlpath", (s: unknown) =>
    String(s).split("/").map(encodeURIComponent).join("/"),
  );

  // Heading anchors (keep Cyrillic/Latin as-is)
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(markdownItAnchor, {
      slugify: (s: string) =>
        s
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/gi, "-")
          .replace(/^-+|-+$/g, ""),
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: "#",
        placement: "after",
        class: "header-anchor",
        ariaHidden: true,
      }),
    }),
  );

  // Paragraph anchors: every <p> inside <article> gets id="p-N" and a ¶ link
  eleventyConfig.addTransform("paragraph-anchors", (content) => {
    const articleOpen = /<article\b[^>]*>/.exec(content);
    if (!articleOpen) return content;
    const start = articleOpen.index;
    const end = content.indexOf("</article>");
    if (start === -1 || end === -1) return content;
    let n = 0;
    let article = content.slice(start, end);
    article = article.replace(/<p>([\s\S]*?)<\/p>/g, (_m, inner) => {
      n += 1;
      return `<p id="p-${n}">${inner}<a class="p-anchor" href="#p-${n}" aria-label="Link to this paragraph">¶</a></p>`;
    });
    return content.slice(0, start) + article + content.slice(end);
  });

  // Instant View needs standalone media as a block: a photo cannot live inside a
  // text paragraph. A <p> whose whole content is one media box becomes a <figure>.
  // Runs AFTER paragraph-anchors on purpose, so the p-N numbering, the id and the
  // ¶ link are carried over verbatim and existing #p-N links keep resolving.
  // Inline icons/emoji (.img-icon) stay inline — they belong to the text flow.
  function spanEnd(s: string): number {
    // s starts with "<span"; index just past its matching </span>, or -1
    const re = /<(\/?)span\b[^>]*>/g;
    let depth = 0;
    let m;
    while ((m = re.exec(s))) {
      depth += m[1] ? -1 : 1;
      if (depth === 0) return re.lastIndex;
    }
    return -1;
  }

  eleventyConfig.addTransform("media-block", (content, page) => {
    const out = typeof page === "string" ? page : page && page.outputPath;
    if (typeof content !== "string" || !out || !out.endsWith(".html"))
      return content;
    const articleOpen = /<article\b[^>]*>/.exec(content);
    if (!articleOpen || !content.includes('class="img-box')) return content;
    const start = articleOpen.index;
    const end = content.indexOf("</article>");
    if (start === -1 || end === -1) return content;

    const article = content
      .slice(start, end)
      .replace(/<p id="(p-\d+)">([\s\S]*?)<\/p>/g, (whole, id, inner) => {
        const anchorRe = /<a class="p-anchor"[\s\S]*?<\/a>\s*$/;
        const anchor = (inner.match(anchorRe) || [""])[0];
        const body = inner.replace(anchorRe, "").trim();
        // exactly one media box, nothing else in the paragraph
        if (!/^<span class="img-box(?! img-icon)/.test(body)) return whole;
        if (spanEnd(body) !== body.length) return whole;
        return `<figure id="${id}" class="img-figure">${body}${anchor}</figure>`;
      });
    return content.slice(0, start) + article + content.slice(end);
  });

  eleventyConfig.addTransform("minify-html", async (content, page) => {
    const out = typeof page === "string" ? page : page && page.outputPath;
    if (typeof content !== "string" || !out || !out.endsWith(".html"))
      return content;
    return minifyHtml(content, {
      collapseWhitespace: true,
      // Preserve meaningful spaces between adjacent inline elements.
      conservativeCollapse: true,
      removeComments: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: false,
    });
  });

  eleventyConfig.addCollection("pages", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((i) => i.data.section && i.inputPath.includes("/crawled/")),
  );

  return {
    dir: {
      input: "crawled",
      output: "docs",
      includes: "_includes",
      data: "_data",
    },
    // markdown must NOT pass through a templating engine: mirrored content
    // contains literal {{ }} sequences that would break Nunjucks/Liquid.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
