---
title: "messages.saveDefaultSendAs"
original: "https://core.telegram.org/method/messages.saveDefaultSendAs"
section: ref
description: "Change the default peer that should be used when sending messages, reactions, poll votes to a specific group"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.saveDefaultSendAs","url":"/method/messages.saveDefaultSendAs/"}]
layout: layout.njk
---

# messages.saveDefaultSendAs

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Group</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The default peer that should be used when sending messages to the group</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>You can't send messages as the specified peer.</td></tr></tbody></table>
