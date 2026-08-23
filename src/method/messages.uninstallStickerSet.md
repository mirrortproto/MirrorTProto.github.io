---
title: "messages.uninstallStickerSet"
original: "https://core.telegram.org/method/messages.uninstallStickerSet"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.uninstallStickerSet","url":"/method/messages.uninstallStickerSet/"}]
layout: layout.njk
---

# messages.uninstallStickerSet

Uninstall a stickerset

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>The stickerset to uninstall</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr></tbody></table>
