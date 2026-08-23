---
title: "photoSizeProgressive"
original: "https://core.telegram.org/constructor/photoSizeProgressive"
section: ref
description: "Progressively encoded photosize"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photoSizeProgressive","url":"/constructor/photoSizeProgressive/"}]
layout: layout.njk
---

# photoSizeProgressive

Progressively encoded photosize

```
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/files#photosizetype-values">PhotoSize.type value »</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Photo width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Photo height</td></tr><tr><td><strong>sizes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Sizes of progressive JPEG file prefixes, which can be used to preliminarily show the image.</td></tr></tbody></table>

### Type

[PhotoSize](/type/PhotoSize/)

### Photosize.type values

See [PhotoSize.type values »](/api/files/#photosizetype-values).

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
