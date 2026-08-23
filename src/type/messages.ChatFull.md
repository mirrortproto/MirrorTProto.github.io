---
title: "messages.ChatFull"
original: "https://core.telegram.org/type/messages.ChatFull"
section: ref
description: "Full info about a channel, supergroup, gigagroup or basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ChatFull","url":"/type/messages.ChatFull/"}]
layout: layout.njk
---

# messages.ChatFull

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups), [gigagroup](/api/channel/#gigagroups) or [basic group](/api/channel/#basic-groups).

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;

---functions---

messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;

channels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chatFull">messages.chatFull</a></td><td>Full info about a <a href="/api/channel#channels">channel</a>, <a href="/api/channel#supergroups">supergroup</a>, <a href="/api/channel#gigagroups">gigagroup</a> or <a href="/api/channel#basic-groups">basic group</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getFullChat">messages.getFullChat</a></td><td>Get full info about a <a href="/api/channel#basic-groups">basic group</a>.</td></tr><tr><td><a href="/method/channels.getFullChannel">channels.getFullChannel</a></td><td>Get full info about a <a href="/api/channel#supergroups">supergroup</a>, <a href="/api/channel#gigagroups">gigagroup</a> or <a href="/api/channel#channels">channel</a></td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
