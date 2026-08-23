---
title: "messages.getMyStickers"
original: "https://core.telegram.org/method/messages.getMyStickers"
section: ref
description: "Fetch all stickersets » owned by the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getMyStickers","url":"/method/messages.getMyStickers/"}]
layout: layout.njk
---

# messages.getMyStickers

Fetch all [stickersets »](/api/stickers/) owned by the current user.

```
messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;
---functions---
messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[messages.MyStickers](/type/messages.MyStickers/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
