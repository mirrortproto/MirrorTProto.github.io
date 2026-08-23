---
title: "contacts.blocked"
original: "https://core.telegram.org/constructor/contacts.blocked"
section: ref
description: "Full list of blocked users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.blocked","url":"/constructor/contacts.blocked/"}]
layout: layout.njk
---

# contacts.blocked

Full list of blocked users.

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PeerBlocked">PeerBlocked</a>&gt;</td><td>List of blocked users</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Blocked chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>List of users</td></tr></tbody></table>

### Type

[contacts.Blocked](/type/contacts.Blocked/)
