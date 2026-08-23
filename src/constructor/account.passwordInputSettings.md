---
title: "account.passwordInputSettings"
original: "https://core.telegram.org/constructor/account.passwordInputSettings"
section: ref
description: "Settings for setting up a new password"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.passwordInputSettings","url":"/constructor/account.passwordInputSettings/"}]
layout: layout.njk
---

# account.passwordInputSettings

Settings for setting up a new password

```
account.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>new_algo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PasswordKdfAlgo">PasswordKdfAlgo</a></td><td>The <a href="/api/srp">SRP algorithm</a> to use</td></tr><tr><td><strong>new_password_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>The <a href="/api/srp">computed password hash</a></td></tr><tr><td><strong>hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Text hint for the password</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Password recovery email</td></tr><tr><td><strong>new_secure_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/SecureSecretSettings">SecureSecretSettings</a></td><td>Telegram <a href="/passport">passport</a> settings</td></tr></tbody></table>

### Type

[account.PasswordInputSettings](/type/account.PasswordInputSettings/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
