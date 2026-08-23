---
title: "inputPhotoFileLocation"
original: "https://core.telegram.org/constructor/inputPhotoFileLocation"
section: ref
description: "Use this object to download a photo with upload.getFile method"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPhotoFileLocation","url":"/constructor/inputPhotoFileLocation/"}]
layout: layout.njk
---

# inputPhotoFileLocation

Use this object to download a photo with [upload.getFile](/method/upload.getFile/) method

```
inputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Photo ID, obtained from the <a href="/constructor/photo">photo</a> object</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Photo's access hash, obtained from the <a href="/constructor/photo">photo</a> object</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/file-references">File reference</a></td></tr><tr><td><strong>thumb_size</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The <a href="/type/PhotoSize">PhotoSize</a> to download: must be set to the <code>type</code> field of the desired PhotoSize object of the <a href="/constructor/photo">photo</a></td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [photo](/constructor/photo/)

Photo

#### [File references](/api/file-references/)

How to handle file references.

#### [PhotoSize](/type/PhotoSize/)

Location of a certain size of a picture

#### [upload.getFile](/method/upload.getFile/)

Returns content of a whole file or its part.
