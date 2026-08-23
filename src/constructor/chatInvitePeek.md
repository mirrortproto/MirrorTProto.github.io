---
title: "chatInvitePeek"
original: "https://core.telegram.org/constructor/chatInvitePeek"
section: ref
description: "A chat invitation that also allows peeking into the group to read messages without joining it."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatInvitePeek","url":"/constructor/chatInvitePeek/"}]
layout: layout.njk
---

# chatInvitePeek

A chat invitation that also allows peeking into the group to read messages without joining it.

```
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat</strong></td><td style="text-align: center;"><a href="/type/Chat">Chat</a></td><td>Chat information</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Read-only anonymous access to this group will be revoked at this date</td></tr></tbody></table>

### Type

[ChatInvite](/type/ChatInvite/)
