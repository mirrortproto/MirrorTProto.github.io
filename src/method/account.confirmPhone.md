---
title: "account.confirmPhone"
original: "https://core.telegram.org/method/account.confirmPhone"
section: ref
description: "Confirm a phone number to cancel account deletion, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.confirmPhone","url":"/method/account.confirmPhone/"}]
layout: layout.njk
---

# account.confirmPhone

Confirm a phone number to cancel account deletion, for more info [click here »](/api/account-deletion/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone code hash, for more info <a href="/api/account-deletion">click here »</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>SMS code, for more info <a href="/api/account-deletion">click here »</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_HASH_INVALID</td><td>Code hash invalid.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr></tbody></table>

### Related pages

#### [Account deletion](/api/account-deletion/)

How to reset an account if the 2FA password was forgotten.
