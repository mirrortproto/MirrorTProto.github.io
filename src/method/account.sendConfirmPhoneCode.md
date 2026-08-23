---
title: "account.sendConfirmPhoneCode"
original: "https://core.telegram.org/method/account.sendConfirmPhoneCode"
section: ref
description: "Send confirmation code to cancel account deletion, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.sendConfirmPhoneCode","url":"/method/account.sendConfirmPhoneCode/"}]
layout: layout.njk
---

# account.sendConfirmPhoneCode

Send confirmation code to cancel account deletion, for more info [click here »](/api/account-deletion/)

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The hash from the service notification, for more info <a href="/api/account-deletion">click here »</a></td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings">CodeSettings</a></td><td>Phone code settings</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>The provided hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Account deletion](/api/account-deletion/)

How to reset an account if the 2FA password was forgotten.
