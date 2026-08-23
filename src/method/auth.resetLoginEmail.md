---
title: "auth.resetLoginEmail"
original: "https://core.telegram.org/method/auth.resetLoginEmail"
section: ref
description: "How to register a user's phone to start using the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.resetLoginEmail","url":"/method/auth.resetLoginEmail/"}]
layout: layout.njk
---

# auth.resetLoginEmail

Reset the [login email »](https://core.telegram.org/api/auth#email-verification).

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number of the account</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone code hash, obtained as described in the <a href="/api/auth">documentation »</a></td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Attempting to send a code to the recovery email, but no email is configured.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>TASK_ALREADY_EXISTS</td><td>An email reset was already requested.</td></tr></tbody></table>

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
