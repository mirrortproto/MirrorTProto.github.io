---
title: "account.resetPassword"
original: "https://core.telegram.org/method/account.resetPassword"
section: ref
description: "Initiate a 2FA password reset: can only be used if the user is already logged-in, see here for more info »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.resetPassword","url":"/method/account.resetPassword/"}]
layout: layout.njk
---

# account.resetPassword

Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](/api/srp/#password-reset)

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;
---functions---
account.resetPassword#9308ce1b = account.ResetPasswordResult;
```

### Parameters

This constructor does not require any parameters.

### Result

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_EMPTY</td><td>The provided password is empty.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
