---
title: "messages.getOnlines"
original: "https://core.telegram.org/method/messages.getOnlines"
section: ref
description: "Get count of online users in a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getOnlines","url":"/method/messages.getOnlines/"}]
layout: layout.njk
---

# messages.getOnlines

Get count of online users in a chat

```
chatOnlines#f041e250 onlines:int = ChatOnlines;
---functions---
messages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The chat</td></tr></tbody></table>

### Result

[ChatOnlines](/type/ChatOnlines/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
