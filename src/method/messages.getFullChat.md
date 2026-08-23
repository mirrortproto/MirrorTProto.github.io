---
title: "messages.getFullChat"
original: "https://core.telegram.org/method/messages.getFullChat"
section: ref
description: "Get full info about a basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getFullChat","url":"/method/messages.getFullChat/"}]
layout: layout.njk
---

# messages.getFullChat

Get full info about a [basic group](/api/channel/#basic-groups).

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
---functions---
messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/channel#basic-groups">Basic group</a> ID.</td></tr></tbody></table>

### Result

[messages.ChatFull](/type/messages.ChatFull/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
