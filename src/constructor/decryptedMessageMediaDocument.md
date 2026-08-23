---
title: "decryptedMessageMediaDocument"
original: "https://core.telegram.org/constructor/decryptedMessageMediaDocument"
section: ref
description: "Document attached to a message in a secret chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaDocument","url":"/constructor/decryptedMessageMediaDocument/"}]
layout: layout.njk
---

# decryptedMessageMediaDocument

Document attached to a message in a secret chat.

```
===8===
decryptedMessageMediaDocument#b095434b thumb:bytes thumb_w:int thumb_h:int file_name:string mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaDocument#7afe8ae2 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:int key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;

===143===
decryptedMessageMediaDocument#6abd9782 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:long key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Thumbnail-file contents (JPEG-file, quality 55, set in a 90x90 square)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail width</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail height</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>File name, moved to <code>attributes</code> in Layer 45.</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>File MIME-type</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Document size (<a href="/type/int">int</a> on layer &lt;143, <a href="/type/long">long</a> on layer &gt;=143)</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Key to decrypt the attached document file</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Initialization</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Document attributes for media types</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Caption</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)

### Related pages

#### [int](/type/int/)

A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves.

#### [long](/type/long/)

A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian).
