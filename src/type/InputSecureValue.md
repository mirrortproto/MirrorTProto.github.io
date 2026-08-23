---
title: "InputSecureValue"
original: "https://core.telegram.org/type/InputSecureValue"
section: ref
description: "Secure value, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSecureValue","url":"/type/InputSecureValue/"}]
layout: layout.njk
---

# InputSecureValue

Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

```
inputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureValue">inputSecureValue</a></td><td>Secure value, <a href="/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
