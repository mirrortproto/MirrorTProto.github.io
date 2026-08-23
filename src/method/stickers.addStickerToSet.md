---
title: "stickers.addStickerToSet"
original: "https://core.telegram.org/method/stickers.addStickerToSet"
section: ref
description: "Add a sticker to a stickerset. The sticker set must have been created by the current user/bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.addStickerToSet","url":"/method/stickers.addStickerToSet/"}]
layout: layout.njk
---

# stickers.addStickerToSet

Add a sticker to a stickerset. The sticker set must have been created by the current user/bot.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>The stickerset</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputStickerSetItem">InputStickerSetItem</a></td><td>The sticker</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKERPACK_STICKERS_TOO_MUCH</td><td>There are too many stickers in this stickerpack, you can't add any more.</td></tr><tr><td>406</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr><tr><td>400</td><td>STICKERS_TOO_MUCH</td><td>There are too many stickers in this stickerpack, you can't add any more.</td></tr><tr><td>400</td><td>STICKER_PNG_NOPNG</td><td>One of the specified stickers is not a valid PNG file.</td></tr><tr><td>400</td><td>STICKER_TGS_NOTGS</td><td>Invalid TGS sticker provided.</td></tr></tbody></table>
