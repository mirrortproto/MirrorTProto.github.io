---
title: "messages.getUnreadMentions"
original: "https://core.telegram.org/method/messages.getUnreadMentions"
section: ref
description: "Get unread messages where we were mentioned"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getUnreadMentions","url":"/method/messages.getUnreadMentions/"}]
layout: layout.njk
---

# messages.getUnreadMentions

Get unread messages where we were mentioned

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where to look for mentions</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>If set, considers only messages within the specified <a href="/api/forum#forum-topics">forum topic</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>add_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum message ID to return, <a href="/api/offsets">see pagination</a></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Minimum message ID to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
