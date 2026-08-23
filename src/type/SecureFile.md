---
title: "SecureFile"
original: "https://core.telegram.org/type/SecureFile"
section: ref
description: "Secure passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureFile","url":"/type/SecureFile/"}]
layout: layout.njk
---

# SecureFile

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
secureFileEmpty#64199744 = SecureFile;
secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureFileEmpty">secureFileEmpty</a></td><td>Empty constructor</td></tr><tr><td><a href="/constructor/secureFile">secureFile</a></td><td>Secure <a href="/passport">passport</a> file, for more info <a href="/passport/encryption#inputsecurefile">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
