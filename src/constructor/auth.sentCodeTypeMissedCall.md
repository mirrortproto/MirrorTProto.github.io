---
title: "auth.sentCodeTypeMissedCall"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeMissedCall"
section: ref
description: "The code will be sent via a flash phone call, that will be closed immediately. The last digits of the phone number that calls are the code that must be entered manually by the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeMissedCall","url":"/constructor/auth.sentCodeTypeMissedCall/"}]
layout: layout.njk
---

# auth.sentCodeTypeMissedCall

The code will be sent via a flash phone call, that will be closed immediately. The last digits of the phone number that calls are the code that must be entered manually by the user.

```
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prefix</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Prefix of the phone number from which the call will be made</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Length of the verification code</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)
