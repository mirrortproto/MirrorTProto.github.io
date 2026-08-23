---
title: "messages.exportedChatInviteReplaced"
original: "https://core.telegram.org/constructor/messages.exportedChatInviteReplaced"
section: ref
description: "The specified chat invite was replaced with another one"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.exportedChatInviteReplaced","url":"/constructor/messages.exportedChatInviteReplaced/"}]
layout: layout.njk
---

# messages.exportedChatInviteReplaced

The specified chat invite was replaced with another one

```
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>The replaced chat invite</td></tr><tr><td><strong>new_invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>The invite that replaces the previous invite</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.ExportedChatInvite](/type/messages.ExportedChatInvite/)
