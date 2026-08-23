---
title: "inputDocumentFileLocation"
original: "https://core.telegram.org/constructor/inputDocumentFileLocation"
section: ref
description: "Document location (video, voice, audio, basically every type except photo)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputDocumentFileLocation","url":"/constructor/inputDocumentFileLocation/"}]
layout: layout.njk
---

# inputDocumentFileLocation

Document location (video, voice, audio, basically every type except photo)

```
inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Document ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><strong>access_hash</strong> parameter from the <a href="/constructor/document">document</a> constructor</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/file-references">File reference</a></td></tr><tr><td><strong>thumb_size</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Thumbnail size to download the thumbnail</td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [document](/constructor/document/)

Document

#### [File references](/api/file-references/)

How to handle file references.
