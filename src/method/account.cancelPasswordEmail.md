---
title: "account.cancelPasswordEmail"
original: "https://core.telegram.org/method/account.cancelPasswordEmail"
section: ref
description: "Cancel the code that was sent to verify an email to use as 2FA recovery method."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.cancelPasswordEmail","url":"/method/account.cancelPasswordEmail/"}]
layout: layout.njk
---

# account.cancelPasswordEmail

Cancel the code that was sent to verify an email to use as [2FA recovery method](/api/srp/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.cancelPasswordEmail#c1cbd5b6 = Bool;
```

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_HASH_EXPIRED</td><td>Email hash expired.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
