---
title: "messages.getAllStickers"
original: "https://core.telegram.org/method/messages.getAllStickers"
section: ref
description: "Get all installed stickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAllStickers","url":"/method/messages.getAllStickers/"}]
layout: layout.njk
---

# messages.getAllStickers

Get all installed stickers

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
---functions---
messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AllStickers](/type/messages.AllStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
