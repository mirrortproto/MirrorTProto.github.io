---
title: "decryptedMessageMediaPhoto"
original: "https://core.telegram.org/constructor/decryptedMessageMediaPhoto"
section: ref
description: "Photo attached to an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaPhoto","url":"/constructor/decryptedMessageMediaPhoto/"}]
layout: layout.njk
---

# decryptedMessageMediaPhoto

Photo attached to an encrypted message.

```
===8===
decryptedMessageMediaPhoto#32798a8c thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaPhoto#f1fa8d78 thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Content of thumbnail file (JPEGfile, quality 55, set in a square 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail width</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail height</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Photo width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Photo height</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Size of the photo in bytes</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Key to decrypt an attached file with a full version</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Initialization vector</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Caption</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
