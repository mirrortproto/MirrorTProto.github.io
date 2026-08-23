---
title: "messages.getFavedStickers"
original: "https://core.telegram.org/method/messages.getFavedStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFavedStickers","url":"/method/messages.getFavedStickers/"}]
layout: layout.njk
---

# messages.getFavedStickers

Get faved stickers

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;
---functions---
messages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.FavedStickers](/type/messages.FavedStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
