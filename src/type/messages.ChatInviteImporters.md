---
title: "messages.ChatInviteImporters"
original: "https://core.telegram.org/type/messages.ChatInviteImporters"
section: ref
description: "List of users that imported a chat invitation link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ChatInviteImporters","url":"/type/messages.ChatInviteImporters/"}]
layout: layout.njk
---

# messages.ChatInviteImporters

List of users that imported a chat invitation link.

```
messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;

---functions---

messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chatInviteImporters">messages.chatInviteImporters</a></td><td>Info about the users that joined the chat using a specific chat invite</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getChatInviteImporters">messages.getChatInviteImporters</a></td><td>Get info about the users that joined the chat using a specific chat invite</td></tr></tbody></table>
