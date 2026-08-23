---
title: "messages.getHistory"
original: "https://core.telegram.org/method/messages.getHistory"
section: ref
description: "Returns the message history in a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getHistory","url":"/method/messages.getHistory/"}]
layout: layout.njk
---

# messages.getHistory

Returns the message history in a peer.

Results are ordered by date (descending).

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Target peer</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Only return messages starting from the specified message ID</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Only return messages sent before the specified date</td></tr><tr><td><strong>add_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of list elements to be skipped, negative values are also accepted.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of results to return</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs less than <strong>max_id</strong></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, the method will return only messages with IDs more than <strong>min_id</strong></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets">Result hash</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>FROZEN_PARTICIPANT_MISSING</td><td>The current account is <a href="/api/auth#frozen-accounts">frozen</a>, and cannot access the specified peer.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TAKEOUT_INVALID</td><td>The specified takeout ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
