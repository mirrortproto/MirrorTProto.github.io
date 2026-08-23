---
title: "phone.receivedCall"
original: "https://core.telegram.org/method/phone.receivedCall"
section: ref
description: "Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended, see here »…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.receivedCall","url":"/method/phone.receivedCall/"}]
layout: layout.njk
---

# phone.receivedCall

Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>The phone call we're currently in</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>The call was already declined.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr></tbody></table>

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
