---
title: "decryptedMessageMediaAudio"
original: "https://core.telegram.org/constructor/decryptedMessageMediaAudio"
section: ref
description: "Audio file attached to a secret chat message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaAudio","url":"/constructor/decryptedMessageMediaAudio/"}]
layout: layout.njk
---

# decryptedMessageMediaAudio

Audio file attached to a secret chat message.

```
===8===
decryptedMessageMediaAudio#6080758f duration:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaAudio#57e0a9cb duration:int mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Audio duration in seconds</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>File size</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Key to decrypt the attached media file</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Initialization vector</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-type of the audio file<br>Parameter added in Layer 13.</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
