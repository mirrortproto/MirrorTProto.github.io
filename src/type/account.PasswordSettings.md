---
title: "account.PasswordSettings"
original: "https://core.telegram.org/type/account.PasswordSettings"
section: ref
description: "Private info associated to the password info (recovery email, telegram passport info & so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.PasswordSettings","url":"/type/account.PasswordSettings/"}]
layout: layout.njk
---

# account.PasswordSettings

Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;

---functions---

account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordSettings">account.passwordSettings</a></td><td>Private info associated to the password info (recovery email, telegram <a href="/passport">passport</a> info &amp; so on)</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPasswordSettings">account.getPasswordSettings</a></td><td>Get private info associated to the password info (recovery email, telegram <a href="/passport">passport</a> info &amp; so on)</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
