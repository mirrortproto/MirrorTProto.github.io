---
title: "auth.cancelCode"
original: "https://core.telegram.org/method/auth.cancelCode"
section: ref
description: "Cancel the login verification code"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.cancelCode","url":"/method/auth.cancelCode/"}]
layout: layout.njk
---

# auth.cancelCode

Cancel the login verification code

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.cancelCode#1f040578 phone_number:string phone_code_hash:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone code hash from <a href="/method/auth.sendCode">auth.sendCode</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login
