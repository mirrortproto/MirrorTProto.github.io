---
title: "messages.togglePaidReactionPrivacy"
original: "https://core.telegram.org/method/messages.togglePaidReactionPrivacy"
section: ref
description: "Changes the privacy of already sent paid reactions on a specific message."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.togglePaidReactionPrivacy","url":"/method/messages.togglePaidReactionPrivacy/"}]
layout: layout.njk
---

# messages.togglePaidReactionPrivacy

Changes the privacy of already sent [paid reactions](/api/reactions/#paid-reactions) on a specific message.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The channel</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The ID of the message to which we sent the paid reactions</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/type/PaidReactionPrivacy">PaidReactionPrivacy</a></td><td>If true, makes the current anonymous in the top sender leaderboard for this message; otherwise, does the opposite.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>REACTION_EMPTY</td><td>Empty reaction provided.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
