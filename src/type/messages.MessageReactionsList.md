---
title: "messages.MessageReactionsList"
original: "https://core.telegram.org/type/messages.MessageReactionsList"
section: ref
description: "List of peers that reacted to a specific message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.MessageReactionsList","url":"/type/messages.MessageReactionsList/"}]
layout: layout.njk
---

# messages.MessageReactionsList

List of peers that reacted to a specific message

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;

---functions---

messages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageReactionsList">messages.messageReactionsList</a></td><td>List of peers that reacted to a specific message</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessageReactionsList">messages.getMessageReactionsList</a></td><td>Get <a href="/api/reactions">message reaction</a> list, along with the sender of each reaction.</td></tr></tbody></table>
