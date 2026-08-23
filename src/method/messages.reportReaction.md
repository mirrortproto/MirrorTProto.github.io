---
title: "messages.reportReaction"
original: "https://core.telegram.org/method/messages.reportReaction"
section: ref
description: "Report a message reaction"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportReaction","url":"/method/messages.reportReaction/"}]
layout: layout.njk
---

# messages.reportReaction

Report a [message reaction](/api/reactions/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportReaction#3f64c076 peer:InputPeer id:int reaction_peer:InputPeer = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the message was sent</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID</td></tr><tr><td><strong>reaction_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer that sent the reaction</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
