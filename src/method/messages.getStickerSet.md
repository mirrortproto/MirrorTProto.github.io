---
title: "messages.getStickerSet"
original: "https://core.telegram.org/method/messages.getStickerSet"
section: ref
description: "Get info about a stickerset"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getStickerSet","url":"/method/messages.getStickerSet/"}]
layout: layout.njk
---

# messages.getStickerSet

Get info about a stickerset

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Stickerset</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMOTICON_STICKERPACK_MISSING</td><td>inputStickerSetDice.emoji cannot be empty.</td></tr><tr><td>406</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
