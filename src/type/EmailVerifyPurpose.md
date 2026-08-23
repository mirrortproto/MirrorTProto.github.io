---
title: "EmailVerifyPurpose"
original: "https://core.telegram.org/type/EmailVerifyPurpose"
section: ref
description: "Email verification purpose"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmailVerifyPurpose","url":"/type/EmailVerifyPurpose/"}]
layout: layout.njk
---

# EmailVerifyPurpose

Email verification purpose

```
emailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;
emailVerifyPurposeLoginChange#527d22eb = EmailVerifyPurpose;
emailVerifyPurposePassport#bbf51685 = EmailVerifyPurpose;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emailVerifyPurposeLoginSetup">emailVerifyPurposeLoginSetup</a></td><td>Email verification purpose: setup login email</td></tr><tr><td><a href="/constructor/emailVerifyPurposeLoginChange">emailVerifyPurposeLoginChange</a></td><td>Email verification purpose: change login email</td></tr><tr><td><a href="/constructor/emailVerifyPurposePassport">emailVerifyPurposePassport</a></td><td>Verify an email for use in <a href="/api/passport">telegram passport</a></td></tr></tbody></table>
