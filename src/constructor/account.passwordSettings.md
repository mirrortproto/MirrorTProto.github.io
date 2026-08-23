---
title: "account.passwordSettings"
original: "https://core.telegram.org/constructor/account.passwordSettings"
section: ref
description: "Private info associated to the password info (recovery email, telegram passport info & so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.passwordSettings","url":"/constructor/account.passwordSettings/"}]
layout: layout.njk
---

# account.passwordSettings

Private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/srp#email-verification">2FA Recovery email</a></td></tr><tr><td><strong>secure_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/SecureSecretSettings">SecureSecretSettings</a></td><td>Telegram <a href="/passport">passport</a> settings</td></tr></tbody></table>

### Type

[account.PasswordSettings](/type/account.PasswordSettings/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
