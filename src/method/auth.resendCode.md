---
title: "auth.resendCode"
original: "https://core.telegram.org/method/auth.resendCode"
section: ref
description: "Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see login for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.resendCode","url":"/method/auth.resendCode/"}]
layout: layout.njk
---

# auth.resendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The phone code hash obtained from <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Official clients only, used if the device integrity verification failed, and no secret could be obtained to invoke <a href="/method/auth.requestFirebaseSms">auth.requestFirebaseSms</a>: in this case, the device integrity verification failure reason must be passed here.</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Attempting to send a code to the recovery email, but no email is configured.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_HASH_EMPTY</td><td>phone_code_hash is missing.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>406</td><td>SEND_CODE_UNAVAILABLE</td><td>Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend).</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/)

Request an SMS code via Firebase.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
