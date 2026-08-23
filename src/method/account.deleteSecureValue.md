---
title: "account.deleteSecureValue"
original: "https://core.telegram.org/method/account.deleteSecureValue"
section: ref
description: "Delete stored Telegram Passport documents, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.deleteSecureValue","url":"/method/account.deleteSecureValue/"}]
layout: layout.njk
---

# account.deleteSecureValue

Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteSecureValue#b880bc4b types:Vector<SecureValueType> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueType">SecureValueType</a>&gt;</td><td>Document types to delete</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
