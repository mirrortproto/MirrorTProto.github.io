---
title: "auth.checkPaidAuth"
original: "https://core.telegram.org/method/auth.checkPaidAuth"
section: ref
description: "Checks the status of a login payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.checkPaidAuth","url":"/method/auth.checkPaidAuth/"}]
layout: layout.njk
---

# auth.checkPaidAuth

Checks the status of a [login payment](/api/auth/#paid-auth).

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The phone code hash obtained from <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The payment form ID passed to <a href="/method/payments.sendPaymentForm">payments.sendPaymentForm</a>.</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [payments.sendPaymentForm](/method/payments.sendPaymentForm/)

Send compiled payment form

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
