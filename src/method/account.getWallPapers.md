---
title: "account.getWallPapers"
original: "https://core.telegram.org/method/account.getWallPapers"
section: ref
description: "Returns a list of available wallpapers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getWallPapers","url":"/method/account.getWallPapers/"}]
layout: layout.njk
---

# account.getWallPapers

Returns a list of available [wallpapers](/api/wallpapers/).

```
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;
---functions---
account.getWallPapers#7967d36 hash:long = account.WallPapers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.WallPapers](/type/account.WallPapers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
