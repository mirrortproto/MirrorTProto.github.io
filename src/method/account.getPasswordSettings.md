---
title: "account.getPasswordSettings"
original: "https://core.telegram.org/method/account.getPasswordSettings"
section: ref
description: "Get private info associated to the password info (recovery email, telegram passport info & so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPasswordSettings","url":"/method/account.getPasswordSettings/"}]
layout: layout.njk
---

# account.getPasswordSettings

Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
---functions---
account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>The password (see <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Result

[account.PasswordSettings](/type/account.PasswordSettings/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
