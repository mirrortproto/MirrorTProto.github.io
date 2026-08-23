---
title: "messages.getSavedHistory"
original: "https://core.telegram.org/method/messages.getSavedHistory"
section: ref
description: "Fetch saved messages » forwarded from a specific peer, or fetch messages from a monoforum topic »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedHistory","url":"/method/messages.getSavedHistory/"}]
layout: layout.njk
---

# messages.getSavedHistory

Fetch [saved messages »](/api/saved-messages/) forwarded from a specific peer, or fetch messages from a [monoforum topic »](/api/monoforum/).

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>If set, fetches messages from the specified monoforum, otherwise fetches from saved messages.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Target peer (or topic)</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Only return messages starting from the specified message ID</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Only return messages sent before the specified date</td></tr><tr><td><strong>add_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of list elements to be skipped, negative values are also accepted.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of results to return</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs less than <strong>max_id</strong></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs more than <strong>min_id</strong></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets">Result hash</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>The specified <code>parent_peer</code> is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
