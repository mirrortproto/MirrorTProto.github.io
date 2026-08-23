---
title: "account.deleteAccount"
original: "https://core.telegram.org/method/account.deleteAccount"
section: ref
description: "Delete the user's account from the telegram servers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.deleteAccount","url":"/method/account.deleteAccount/"}]
layout: layout.njk
---

# account.deleteAccount

Delete the user's account from the telegram servers.

Can also be used to delete the account of a user that provided the login code, but forgot the 2FA password and no recovery method is configured, see [here »](/api/srp/#password-recovery) for more info on password recovery, and [here »](/api/account-deletion/) for more info on account deletion.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteAccount#a2c0cf74 flags:# reason:string password:flags.0?InputCheckPasswordSRP = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Why is the account being deleted, can be empty</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td><a href="/api/srp">2FA password</a>: this field can be omitted even for accounts with 2FA enabled: in this case account account deletion will be delayed by 7 days <a href="/api/account-deletion">as specified in the docs »</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>420</td><td>2FA_CONFIRM_WAIT_%d</td><td>Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in %d seconds.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Account deletion](/api/account-deletion/)

How to reset an account if the 2FA password was forgotten.
