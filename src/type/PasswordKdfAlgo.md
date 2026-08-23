---
title: "PasswordKdfAlgo"
original: "https://core.telegram.org/type/PasswordKdfAlgo"
section: ref
description: "Key derivation function to use when generating the password hash for SRP two-factor authorization"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PasswordKdfAlgo","url":"/type/PasswordKdfAlgo/"}]
layout: layout.njk
---

# PasswordKdfAlgo

Key derivation function to use when generating the [password hash for SRP two-factor authorization](/api/srp/)

```
passwordKdfAlgoUnknown#d45ab096 = PasswordKdfAlgo;
passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/passwordKdfAlgoUnknown">passwordKdfAlgoUnknown</a></td><td>Unknown KDF (most likely, the client is outdated and does not support the specified KDF algorithm)</td></tr><tr><td><a href="/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow">passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow</a></td><td>This key derivation algorithm defines that <a href="/api/srp">SRP 2FA login</a> must be used</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
