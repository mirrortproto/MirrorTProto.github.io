---
title: "phone.sendSignalingData"
original: "https://core.telegram.org/method/phone.sendSignalingData"
section: ref
description: "Send VoIP signaling data for an ongoing phone call."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.sendSignalingData","url":"/method/phone.sendSignalingData/"}]
layout: layout.njk
---

# phone.sendSignalingData

Send VoIP [signaling data](/api/calls/#signaling-data) for an ongoing phone call.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>Phone call</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Signaling payload</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_NOT_ACTIVE</td><td>The specified call is not active.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr></tbody></table>

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
