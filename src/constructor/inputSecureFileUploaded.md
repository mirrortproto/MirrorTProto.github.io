---
title: "inputSecureFileUploaded"
original: "https://core.telegram.org/constructor/inputSecureFileUploaded"
section: ref
description: "Uploaded secure file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSecureFileUploaded","url":"/constructor/inputSecureFileUploaded/"}]
layout: layout.njk
---

# inputSecureFileUploaded

Uploaded secure file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Secure file ID</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Secure file part count</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MD5 hash of encrypted uploaded file, to be checked server-side</td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>File hash</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Secret</td></tr></tbody></table>

### Type

[InputSecureFile](/type/InputSecureFile/)

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
