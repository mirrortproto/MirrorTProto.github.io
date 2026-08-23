---
title: "messages.getPeerSettings"
original: "https://core.telegram.org/method/messages.getPeerSettings"
section: ref
description: "How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPeerSettings","url":"/method/messages.getPeerSettings/"}]
layout: layout.njk
---

# messages.getPeerSettings

Get peer settings

```
messages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;
---functions---
messages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer</td></tr></tbody></table>

### Result

[messages.PeerSettings](/type/messages.PeerSettings/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
