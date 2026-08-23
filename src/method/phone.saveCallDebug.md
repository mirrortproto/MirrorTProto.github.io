---
title: "phone.saveCallDebug"
original: "https://core.telegram.org/method/phone.saveCallDebug"
section: ref
description: "Send phone call debug data to server."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.saveCallDebug","url":"/method/phone.saveCallDebug/"}]
layout: layout.njk
---

# phone.saveCallDebug

Send [phone call](/api/calls/#call-debug) debug data to server.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>Phone call</td></tr><tr><td><strong>debug</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Debug statistics obtained from tgcalls</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr><tr><td>400</td><td>DATA_JSON_INVALID</td><td>The provided JSON data is invalid.</td></tr></tbody></table>

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
