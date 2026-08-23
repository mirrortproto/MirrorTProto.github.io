---
title: "inputSecureFile"
original: "https://core.telegram.org/constructor/inputSecureFile"
section: ref
description: "Pre-uploaded passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSecureFile","url":"/constructor/inputSecureFile/"}]
layout: layout.njk
---

# inputSecureFile

Pre-uploaded [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

```
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Secure file ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Secure file access hash</td></tr></tbody></table>

### Type

[InputSecureFile](/type/InputSecureFile/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
