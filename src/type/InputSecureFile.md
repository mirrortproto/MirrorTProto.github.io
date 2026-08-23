---
title: "InputSecureFile"
original: "https://core.telegram.org/type/InputSecureFile"
section: ref
description: "Secure passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSecureFile","url":"/type/InputSecureFile/"}]
layout: layout.njk
---

# InputSecureFile

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureFileUploaded">inputSecureFileUploaded</a></td><td>Uploaded secure file, for more info <a href="/passport/encryption#inputsecurefile">see the passport docs »</a></td></tr><tr><td><a href="/constructor/inputSecureFile">inputSecureFile</a></td><td>Pre-uploaded <a href="/passport">passport</a> file, for more info <a href="/passport/encryption#inputsecurefile">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
