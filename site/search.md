---
title: "Search"
original: "https://core.telegram.org"
section: site
description: "Full-text search over every section of the Telegram documentation mirror, with a filter by section."
generated: true
layout: layout.njk
---

# Search

<link rel="stylesheet" href="/pagefind/pagefind-component-ui.css">

Full-text search over the whole mirror: articles, constructors, methods and types. Use the **Section** filter below to limit results to any documentation section, including Apps & Clients, BlackBerry Guide, Developer Tools, Policies and Resources.

<div class="search-controls">
<pagefind-config faceted></pagefind-config>
<pagefind-filter-dropdown filter="section" label="Section"></pagefind-filter-dropdown>
<pagefind-searchbox shortcut="/" show-sub-results></pagefind-searchbox>
</div>

<script src="/pagefind/pagefind-component-ui.js" type="module"></script>
<script src="/js/search.js" defer></script>
