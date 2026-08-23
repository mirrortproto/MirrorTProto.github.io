---
title: "messages.foundStickerSets"
original: "https://core.telegram.org/constructor/messages.foundStickerSets"
section: ref
description: "messages.FoundStickerSets"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.foundStickerSets","url":"/constructor/messages.foundStickerSets/"}]
layout: layout.njk
---

# messages.foundStickerSets

Found stickersets

```
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerSetCovered">StickerSetCovered</a>&gt;</td><td>Found stickersets</td></tr></tbody></table>

### Type

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
