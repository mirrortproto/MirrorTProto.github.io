---
title: "photoStrippedSize"
original: "https://core.telegram.org/constructor/photoStrippedSize"
section: ref
description: "A low-resolution compressed JPG payload"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photoStrippedSize","url":"/constructor/photoStrippedSize/"}]
layout: layout.njk
---

# photoStrippedSize

A low-resolution compressed JPG payload

```
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/files#photosizetype-values">PhotoSize.type value »</a></td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Thumbnail data, see <a href="/api/files#stripped-thumbnails">stripped thumbnails »</a></td></tr></tbody></table>

### Type

[PhotoSize](/type/PhotoSize/)

### Photosize.type values

See [PhotoSize.type values »](https://core.telegram.org/api/files#photosizetype-values).

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
