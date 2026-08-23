---
title: "messages.ExportedChatInvite"
original: "https://core.telegram.org/type/messages.ExportedChatInvite"
section: ref
description: "Contains info about a chat invite, and eventually a pointer to the newest chat invite."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ExportedChatInvite","url":"/type/messages.ExportedChatInvite/"}]
layout: layout.njk
---

# messages.ExportedChatInvite

Contains info about a chat invite, and eventually a pointer to the newest chat invite.

```
messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;

---functions---

messages.getExportedChatInvite#73746f5c peer:InputPeer link:string = messages.ExportedChatInvite;
messages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.exportedChatInvite">messages.exportedChatInvite</a></td><td>Info about a chat invite</td></tr><tr><td><a href="/constructor/messages.exportedChatInviteReplaced">messages.exportedChatInviteReplaced</a></td><td>The specified chat invite was replaced with another one</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getExportedChatInvite">messages.getExportedChatInvite</a></td><td>Get info about a chat invite</td></tr><tr><td><a href="/method/messages.editExportedChatInvite">messages.editExportedChatInvite</a></td><td>Edit an exported chat invite</td></tr></tbody></table>
