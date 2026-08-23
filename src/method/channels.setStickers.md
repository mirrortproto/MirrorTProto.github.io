---
title: "channels.setStickers"
original: "https://core.telegram.org/method/channels.setStickers"
section: ref
description: "Associate a stickerset to the supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.setStickers","url":"/method/channels.setStickers/"}]
layout: layout.njk
---

# channels.setStickers

Associate a stickerset to the supergroup

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setStickers#ea8ca4f9 channel:InputChannel stickerset:InputStickerSet = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Supergroup</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>The stickerset to associate</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PARTICIPANTS_TOO_FEW</td><td>Not enough participants.</td></tr><tr><td>406</td><td>STICKERSET_OWNER_ANONYMOUS</td><td>Provided stickerset can't be installed as group stickerset to prevent admin deanonymization.</td></tr></tbody></table>
