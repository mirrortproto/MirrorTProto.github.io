---
title: "chatlists.chatlistInviteAlready"
original: "https://core.telegram.org/constructor/chatlists.chatlistInviteAlready"
section: ref
description: "Updated info about a chat folder deep link » we already imported."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.chatlistInviteAlready","url":"/constructor/chatlists.chatlistInviteAlready/"}]
layout: layout.njk
---

# chatlists.chatlistInviteAlready

Updated info about a [chat folder deep link »](/api/links/#chat-folder-links) we already imported.

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>filter_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the imported folder</td></tr><tr><td><strong>missing_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>New peers to be imported</td></tr><tr><td><strong>already_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Peers that were already imported</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Related chat information</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Related user information</td></tr></tbody></table>

### Type

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
