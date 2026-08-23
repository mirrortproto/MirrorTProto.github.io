---
title: "SecurePlainData"
original: "https://core.telegram.org/type/SecurePlainData"
section: ref
description: "Plaintext verified passport data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecurePlainData","url":"/type/SecurePlainData/"}]
layout: layout.njk
---

# SecurePlainData

Plaintext verified [passport data](https://core.telegram.org/passport/encryption#secureplaindata).

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/securePlainPhone">securePlainPhone</a></td><td>Phone number to use in <a href="/passport">telegram passport</a>: <a href="/passport/encryption#secureplaindata">it must be verified, first »</a>.</td></tr><tr><td><a href="/constructor/securePlainEmail">securePlainEmail</a></td><td>Email address to use in <a href="/passport">telegram passport</a>: <a href="/passport/encryption#secureplaindata">it must be verified, first »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
