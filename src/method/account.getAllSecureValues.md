---
title: "account.getAllSecureValues"
original: "https://core.telegram.org/method/account.getAllSecureValues"
section: ref
description: "Get all saved Telegram Passport documents, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getAllSecureValues","url":"/method/account.getAllSecureValues/"}]
layout: layout.njk
---

# account.getAllSecureValues

Get all saved [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

```
---functions---
account.getAllSecureValues#b288bc7d = Vector<SecureValue>;
```

### Parameters

This constructor does not require any parameters.

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)\>

### Only users can use this method

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
