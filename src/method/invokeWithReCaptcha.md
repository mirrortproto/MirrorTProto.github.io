---
title: "invokeWithReCaptcha"
original: "https://core.telegram.org/method/invokeWithReCaptcha"
section: ref
description: "Official clients only: re-execute a method call that required reCAPTCHA verification via a RECAPTCHA_CHECK_%s__%s, where the first placeholder is the action, and the second one is…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"invokeWithReCaptcha","url":"/method/invokeWithReCaptcha/"}]
layout: layout.njk
---

# invokeWithReCaptcha

Official clients only: re-execute a method call that required reCAPTCHA verification via a `RECAPTCHA_CHECK_%s__%s`, where the first placeholder is the `action`, and the second one is the reCAPTCHA key ID.

```
---functions---
invokeWithReCaptcha#adbb0f94 {X:Type} token:string query:!X = X;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>reCAPTCHA token received after verification.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>The original method call.</td></tr></tbody></table>

### Result

Returns the type returned by the invoked method.

### Both users and bots can use this method
