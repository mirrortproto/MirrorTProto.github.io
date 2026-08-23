---
title: "auth.reportMissingCode"
original: "https://core.telegram.org/method/auth.reportMissingCode"
section: ref
description: "Official apps only, reports that the SMS authentication code wasn't delivered."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.reportMissingCode","url":"/method/auth.reportMissingCode/"}]
layout: layout.njk
---

# auth.reportMissingCode

Official apps only, reports that the SMS authentication code wasn't delivered.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.reportMissingCode#cb9deff6 phone_number:string phone_code_hash:string mnc:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number where we were supposed to receive the code</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The phone code hash obtained from <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>mnc</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="https://en.wikipedia.org/wiki/Mobile_country_code">MNC</a> of the current network operator.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login
