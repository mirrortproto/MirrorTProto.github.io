---
title: "account.sendVerifyEmailCode"
original: "https://core.telegram.org/method/account.sendVerifyEmailCode"
section: ref
description: "Send an email verification code."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.sendVerifyEmailCode","url":"/method/account.sendVerifyEmailCode/"}]
layout: layout.njk
---

# account.sendVerifyEmailCode

Send an email verification code.

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;
---functions---
account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/EmailVerifyPurpose">EmailVerifyPurpose</a></td><td>Verification purpose.</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The email where to send the code.</td></tr></tbody></table>

### Result

[account.SentEmailCode](/type/account.SentEmailCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INVALID</td><td>The specified email is invalid.</td></tr><tr><td>400</td><td>EMAIL_NOT_ALLOWED</td><td>The specified email cannot be used to complete the operation.</td></tr><tr><td>400</td><td>EMAIL_NOT_SETUP</td><td>In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_HASH_EXPIRED</td><td>An invalid or expired <code>phone_code_hash</code> was provided.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>
