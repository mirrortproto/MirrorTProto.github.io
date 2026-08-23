---
title: "messages.getPeerDialogs"
original: "https://core.telegram.org/method/messages.getPeerDialogs"
section: ref
description: "Get dialog info of specified peers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPeerDialogs","url":"/method/messages.getPeerDialogs/"}]
layout: layout.njk
---

# messages.getPeerDialogs

Get dialog info of specified peers

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDialogPeer">InputDialogPeer</a>&gt;</td><td>Peers</td></tr></tbody></table>

### Result

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>FROZEN_PARTICIPANT_MISSING</td><td>The current account is <a href="/api/auth#frozen-accounts">frozen</a>, and cannot access the specified peer.</td></tr><tr><td>400</td><td>INPUT_PEERS_EMPTY</td><td>The specified peer array is empty.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
