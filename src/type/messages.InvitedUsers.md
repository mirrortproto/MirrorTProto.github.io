---
title: "messages.InvitedUsers"
original: "https://core.telegram.org/type/messages.InvitedUsers"
section: ref
description: "Contains info about successfully or unsuccessfully invited » users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.InvitedUsers","url":"/type/messages.InvitedUsers/"}]
layout: layout.njk
---

# messages.InvitedUsers

Contains info about successfully or unsuccessfully [invited »](/api/invites/#direct-invites) users.

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;

---functions---

messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;
messages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;

channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.invitedUsers">messages.invitedUsers</a></td><td>Contains info about successfully or unsuccessfully <a href="/api/invites#direct-invites">invited »</a> users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.addChatUser">messages.addChatUser</a></td><td>Adds a user to a chat and sends a service message on it.</td></tr><tr><td><a href="/method/messages.createChat">messages.createChat</a></td><td>Creates a new chat.</td></tr><tr><td><a href="/method/channels.inviteToChannel">channels.inviteToChannel</a></td><td>Invite users to a channel/supergroup</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
