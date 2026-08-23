---
title: "SecureValue"
original: "https://core.telegram.org/type/SecureValue"
section: ref
description: "Secure Telegram Passport value"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureValue","url":"/type/SecureValue/"}]
layout: layout.njk
---

# SecureValue

Secure Telegram Passport value

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;

---functions---

account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureValue">secureValue</a></td><td>Secure value</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.saveSecureValue">account.saveSecureValue</a></td><td>Securely save <a href="/passport">Telegram Passport</a> document, <a href="/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>
