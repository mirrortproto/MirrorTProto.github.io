---
title: "account.PasswordInputSettings"
original: "https://core.telegram.org/type/account.PasswordInputSettings"
section: ref
description: "Constructor for setting up a new 2FA SRP password"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.PasswordInputSettings","url":"/type/account.PasswordInputSettings/"}]
layout: layout.njk
---

# account.PasswordInputSettings

Constructor for setting up a new [2FA SRP password](/api/srp/)

```
account.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordInputSettings">account.passwordInputSettings</a></td><td>Settings for setting up a new password</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
