---
title: "decryptedMessageMediaExternalDocument"
original: "https://core.telegram.org/constructor/decryptedMessageMediaExternalDocument"
section: ref
description: "Non-e2e documented forwarded from non-secret chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaExternalDocument","url":"/constructor/decryptedMessageMediaExternalDocument/"}]
layout: layout.njk
---

# decryptedMessageMediaExternalDocument

Non-e2e documented forwarded from non-secret chat

```
===23===
decryptedMessageMediaExternalDocument#fa95b0dd id:long access_hash:long date:int mime_type:string size:int thumb:PhotoSize dc_id:int attributes:Vector<DocumentAttribute> = DecryptedMessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Document ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>access hash</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Date</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Mime type</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Size</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/PhotoSize">PhotoSize</a></td><td>Thumbnail</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>DC ID</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Attributes for media types</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
