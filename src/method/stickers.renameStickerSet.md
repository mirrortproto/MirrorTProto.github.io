---
title: "stickers.renameStickerSet"
original: "https://core.telegram.org/method/stickers.renameStickerSet"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.renameStickerSet","url":"/method/stickers.renameStickerSet/"}]
layout: layout.njk
---

# stickers.renameStickerSet

Renames a stickerset.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.renameStickerSet#124b1c00 stickerset:InputStickerSet title:string = messages.StickerSet;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Stickerset to rename</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>New stickerset title</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr></tbody></table>
