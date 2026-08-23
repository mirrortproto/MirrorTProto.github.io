---
title: "account.getChatThemes"
original: "https://core.telegram.org/method/account.getChatThemes"
section: ref
description: "Get all available chat themes »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getChatThemes","url":"/method/account.getChatThemes/"}]
layout: layout.njk
---

# account.getChatThemes

Get all available chat [themes »](/api/themes/).

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
---functions---
account.getChatThemes#d638de89 hash:long = account.Themes;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.Themes](/type/account.Themes/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
