---
title: "messages.myStickers"
original: "https://core.telegram.org/constructor/messages.myStickers"
section: ref
description: "The list of stickersets owned by the current account »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.myStickers","url":"/constructor/messages.myStickers/"}]
layout: layout.njk
---

# messages.myStickers

The list of [stickersets owned by the current account »](/api/stickers/).

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of owned stickersets.</td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerSetCovered">StickerSetCovered</a>&gt;</td><td>Stickersets</td></tr></tbody></table>

### Type

[messages.MyStickers](/type/messages.MyStickers/)

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
