---
title: "stickers.replaceSticker"
original: "https://core.telegram.org/method/stickers.replaceSticker"
section: ref
description: "Replace a sticker in a stickerset »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.replaceSticker","url":"/method/stickers.replaceSticker/"}]
layout: layout.njk
---

# stickers.replaceSticker

Replace a sticker in a [stickerset »](/api/stickers/).

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Old sticker document.</td></tr><tr><td><strong>new_sticker</strong></td><td style="text-align: center;"><a href="/type/InputStickerSetItem">InputStickerSetItem</a></td><td>New sticker.</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>The provided sticker is invalid.</td></tr></tbody></table>

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
