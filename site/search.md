---
title: "Search"
original: "https://core.telegram.org"
section: site
description: "Full-text search over the mirrored Telegram API, Bot API, MTProto, TL schema, blog and FAQ pages, with a filter by section."
generated: true
layout: layout.njk
---

# Search

<link rel="stylesheet" href="/pagefind/pagefind-component-ui.css">

Full-text search over the whole mirror: articles, constructors, methods and types. Use the **Section** filter below to limit the search to Telegram API, Bot API, MTProto, Schema, Blog, FAQ or Other pages.

<pagefind-config faceted preload></pagefind-config>
<pagefind-filter-dropdown filter="section" label="Section"></pagefind-filter-dropdown>
<pagefind-searchbox shortcut="/" show-sub-results></pagefind-searchbox>

<script src="/pagefind/pagefind-component-ui.js" type="module"></script>
<script src="/js/search.js" defer></script>
