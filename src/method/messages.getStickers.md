---
title: "messages.getStickers"
original: "https://core.telegram.org/method/messages.getStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getStickers","url":"/method/messages.getStickers/"}]
layout: layout.njk
---

# messages.getStickers

Get stickers by emoji

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;
---functions---
messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The emoji</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.Stickers](/type/messages.Stickers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMOTICON_EMPTY</td><td>The emoji is empty.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
