---
title: "stickers.deleteStickerSet"
original: "https://core.telegram.org/method/stickers.deleteStickerSet"
section: ref
description: "Deletes a stickerset we created."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.deleteStickerSet","url":"/method/stickers.deleteStickerSet/"}]
layout: layout.njk
---

# stickers.deleteStickerSet

Deletes a stickerset we created.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stickers.deleteStickerSet#87704394 stickerset:InputStickerSet = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Stickerset to delete</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr></tbody></table>
