---
title: "account.saveSecureValue"
original: "https://core.telegram.org/method/account.saveSecureValue"
section: ref
description: "Securely save Telegram Passport document, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveSecureValue","url":"/method/account.saveSecureValue/"}]
layout: layout.njk
---

# account.saveSecureValue

Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
---functions---
account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/InputSecureValue">InputSecureValue</a></td><td>Secure value, <a href="/passport/encryption#encryption">for more info see the passport docs »</a></td></tr><tr><td><strong>secure_secret_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Passport secret hash, <a href="/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>

### Result

[SecureValue](/type/SecureValue/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_REQUIRED</td><td>A <a href="/api/srp">2FA password</a> must be configured to use Telegram Passport.</td></tr><tr><td>400</td><td>SECURE_SECRET_REQUIRED</td><td>A secure secret is required.</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
