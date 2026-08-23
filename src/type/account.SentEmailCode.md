---
title: "account.SentEmailCode"
original: "https://core.telegram.org/type/account.SentEmailCode"
section: ref
description: "The email code that was sent"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SentEmailCode","url":"/type/account.SentEmailCode/"}]
layout: layout.njk
---

# account.SentEmailCode

The email code that was sent

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;

---functions---

account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.sentEmailCode">account.sentEmailCode</a></td><td>The sent email code</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.sendVerifyEmailCode">account.sendVerifyEmailCode</a></td><td>Send an email verification code.</td></tr></tbody></table>
