---
title: "webDocument"
original: "https://core.telegram.org/constructor/webDocument"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webDocument","url":"/constructor/webDocument/"}]
layout: layout.njk
---

# webDocument

Remote document

```
webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Document URL</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Access hash</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>File size</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME type</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Attributes for media types</td></tr></tbody></table>

### Type

[WebDocument](/type/WebDocument/)
