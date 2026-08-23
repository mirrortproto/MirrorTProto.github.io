---
title: "messages.messageReactionsList"
original: "https://core.telegram.org/constructor/messages.messageReactionsList"
section: ref
description: "List of peers that reacted to a specific message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.messageReactionsList","url":"/constructor/messages.messageReactionsList/"}]
layout: layout.njk
---

# messages.messageReactionsList

List of peers that reacted to a specific message

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of reactions matching query</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessagePeerReaction">MessagePeerReaction</a>&gt;</td><td>List of peers that reacted to a specific message</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>If set, indicates the next offset to use to load more results by invoking <a href="/method/messages.getMessageReactionsList">messages.getMessageReactionsList</a>.</td></tr></tbody></table>

### Type

[messages.MessageReactionsList](/type/messages.MessageReactionsList/)

### Related pages

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Get [message reaction](/api/reactions/) list, along with the sender of each reaction.
