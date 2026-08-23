---
title: "stickers.removeStickerFromSet"
original: "https://core.telegram.org/method/stickers.removeStickerFromSet"
section: ref
description: "Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.removeStickerFromSet","url":"/method/stickers.removeStickerFromSet/"}]
layout: layout.njk
---

# stickers.removeStickerFromSet

Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>The sticker to remove</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>The provided sticker is invalid.</td></tr></tbody></table>
