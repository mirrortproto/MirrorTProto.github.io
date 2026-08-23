---
title: "messages.recentStickers"
original: "https://core.telegram.org/constructor/messages.recentStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.recentStickers","url":"/constructor/messages.recentStickers/"}]
layout: layout.njk
---

# messages.recentStickers

Recently used stickers

```
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>packs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerPack">StickerPack</a>&gt;</td><td>Emojis associated to stickers</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Recent stickers</td></tr><tr><td><strong>dates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>When was each sticker last used</td></tr></tbody></table>

### Type

[messages.RecentStickers](/type/messages.RecentStickers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
