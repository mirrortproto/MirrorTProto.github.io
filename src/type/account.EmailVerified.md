---
title: "account.EmailVerified"
original: "https://core.telegram.org/type/account.EmailVerified"
section: ref
description: "Email verification status"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.EmailVerified","url":"/type/account.EmailVerified/"}]
layout: layout.njk
---

# account.EmailVerified

Email verification status

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;

---functions---

account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.emailVerified">account.emailVerified</a></td><td>The email was verified correctly.</td></tr><tr><td><a href="/constructor/account.emailVerifiedLogin">account.emailVerifiedLogin</a></td><td>The email was verified correctly, and a login code was just sent to it.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.verifyEmail">account.verifyEmail</a></td><td>Verify an email address.</td></tr></tbody></table>
