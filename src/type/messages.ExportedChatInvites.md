---
title: "messages.ExportedChatInvites"
original: "https://core.telegram.org/type/messages.ExportedChatInvites"
section: ref
description: "Info about chat invites exported by a certain admin."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ExportedChatInvites","url":"/type/messages.ExportedChatInvites/"}]
layout: layout.njk
---

# messages.ExportedChatInvites

Info about chat invites exported by a certain admin.

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;

---functions---

messages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvites">messages.exportedChatInvites</a></td><td>Info about chat invites exported by a certain admin.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvites">messages.getExportedChatInvites</a></td><td>Get info about the chat invites of a specific chat</td></tr></tbody></table>
