---
title: "auth.recoverPassword"
original: "https://core.telegram.org/method/auth.recoverPassword"
section: ref
description: "Reset the 2FA password using the recovery code sent using auth.requestPasswordRecovery."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.recoverPassword","url":"/method/auth.recoverPassword/"}]
layout: layout.njk
---

# auth.recoverPassword

Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Code received via email</td></tr><tr><td><strong>new_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/account.PasswordInputSettings">account.PasswordInputSettings</a></td><td>New password</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_EMPTY</td><td>The provided code is empty.</td></tr><tr><td>400</td><td>NEW_SETTINGS_INVALID</td><td>The new password settings are invalid.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).
