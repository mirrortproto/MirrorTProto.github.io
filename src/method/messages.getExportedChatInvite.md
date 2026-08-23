---
title: "messages.getExportedChatInvite"
original: "https://core.telegram.org/method/messages.getExportedChatInvite"
section: ref
description: "Get info about a chat invite"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getExportedChatInvite","url":"/method/messages.getExportedChatInvite/"}]
layout: layout.njk
---

# messages.getExportedChatInvite

Get info about a chat invite

```
messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
---functions---
messages.getExportedChatInvite#73746f5c peer:InputPeer link:string = messages.ExportedChatInvite;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Invite link</td></tr></tbody></table>

### Result

[messages.ExportedChatInvite](/type/messages.ExportedChatInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
