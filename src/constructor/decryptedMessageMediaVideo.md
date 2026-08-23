---
title: "decryptedMessageMediaVideo"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVideo"
section: ref
description: "Video attached to an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaVideo","url":"/constructor/decryptedMessageMediaVideo/"}]
layout: layout.njk
---

# decryptedMessageMediaVideo

Video attached to an encrypted message.

```
===8===
decryptedMessageMediaVideo#4cee6ef3 thumb:bytes thumb_w:int thumb_h:int duration:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaVideo#524a415d thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaVideo#970c8c0e thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Content of thumbnail file (JPEG file, quality 55, set in a square 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail width</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Thumbnail height</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Duration of video in seconds</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Image width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Image height</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>File size</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Key to decrypt the attached video file</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Initialization vector</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-type of the video file<br>Parameter added in Layer 17.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Caption</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
