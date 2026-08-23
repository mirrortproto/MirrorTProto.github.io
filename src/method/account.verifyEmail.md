---
title: "account.verifyEmail"
original: "https://core.telegram.org/method/account.verifyEmail"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.verifyEmail","url":"/method/account.verifyEmail/"}]
layout: layout.njk
---

# account.verifyEmail

Verify an email address.

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;
---functions---
account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/EmailVerifyPurpose">EmailVerifyPurpose</a></td><td>Verification purpose</td></tr><tr><td><strong>verification</strong></td><td style="text-align: center;"><a href="/type/EmailVerification">EmailVerification</a></td><td>Email verification code or token</td></tr></tbody></table>

### Result

[account.EmailVerified](/type/account.EmailVerified/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_INVALID</td><td>Code invalid.</td></tr><tr><td>400</td><td>EMAIL_INVALID</td><td>The specified email is invalid.</td></tr><tr><td>400</td><td>EMAIL_NOT_ALLOWED</td><td>The specified email cannot be used to complete the operation.</td></tr><tr><td>400</td><td>EMAIL_VERIFY_EXPIRED</td><td>The verification email has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>
