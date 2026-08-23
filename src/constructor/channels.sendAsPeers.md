---
title: "channels.sendAsPeers"
original: "https://core.telegram.org/constructor/channels.sendAsPeers"
section: ref
description: "A list of peers that can be used to send messages in a specific group"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.sendAsPeers","url":"/constructor/channels.sendAsPeers/"}]
layout: layout.njk
---

# channels.sendAsPeers

A list of peers that can be used to send messages in a specific group

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SendAsPeer">SendAsPeer</a>&gt;</td><td>Peers that can be used to send messages to the group</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[channels.SendAsPeers](/type/channels.SendAsPeers/)
