---
title: "phone.confirmCall"
original: "https://core.telegram.org/method/phone.confirmCall"
section: ref
description: "Complete phone call E2E encryption key exchange », see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.confirmCall","url":"/method/phone.confirmCall/"}]
layout: layout.njk
---

# phone.confirmCall

[Complete phone call E2E encryption key exchange »](/api/end-to-end/voice-calls/), see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>The phone call</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Parameter for E2E encryption key exchange »</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Key fingerprint</td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Phone call settings</td></tr></tbody></table>

### Result

[phone.PhoneCall](/type/phone.PhoneCall/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>The call was already declined.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr></tbody></table>

### Related pages

#### [End-to-End Encrypted Voice Calls](/api/end-to-end/voice-calls/)

Deprecated description of encryption in voice calls as implemented in Telegram apps older than version 7.0.

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
