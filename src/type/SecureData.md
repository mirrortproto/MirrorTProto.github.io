---
title: "SecureData"
original: "https://core.telegram.org/type/SecureData"
section: ref
description: "Secure passport data, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureData","url":"/type/SecureData/"}]
layout: layout.njk
---

# SecureData

Secure [passport](https://core.telegram.org/passport) data, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#securedata)

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureData">secureData</a></td><td>Secure <a href="/passport">passport</a> data, for more info <a href="/passport/encryption#securedata">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
