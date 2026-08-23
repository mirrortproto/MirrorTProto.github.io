---
title: "encryptedFile"
original: "https://core.telegram.org/constructor/encryptedFile"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedFile","url":"/constructor/encryptedFile/"}]
layout: layout.njk
---

# encryptedFile

Encrypted file.

```
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>File ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Checking sum depending on user ID</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>File size in bytes</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of data center</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>32-bit fingerprint of key used for file encryption</td></tr></tbody></table>

### Type

[EncryptedFile](/type/EncryptedFile/)
