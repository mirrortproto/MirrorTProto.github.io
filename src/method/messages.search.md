---
title: "messages.search"
original: "https://core.telegram.org/method/messages.search"
section: ref
description: "An empty constructor, no user or chat is defined."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.search","url":"/method/messages.search/"}]
layout: layout.njk
---

# messages.search

Search for messages.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>User or chat, histories with which are searched, or <a href="/constructor/inputPeerEmpty">(inputPeerEmpty)</a> constructor to search in all private chats and <a href="/api/channel">normal groups (not channels) »</a>. Use <a href="/method/messages.searchGlobal">messages.searchGlobal</a> to search globally in all chats, groups, supergroups and channels.</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Text search request</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Only return messages sent by the specified user ID</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>Search within the <a href="/api/saved-messages">saved message dialog »</a> with this ID.</td></tr><tr><td><strong>saved_reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>You may search for <a href="/api/saved-messages#tags">saved messages tagged »</a> with one or more reactions using this flag.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td><a href="/api/threads">Thread ID</a></td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Filter to return only specified message types</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Only return messages starting from the specified message ID</td></tr><tr><td><strong>add_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Additional offset</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Number of results to return</a>, can be 0 to only return the message counter.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Maximum message ID to return</a></td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Minimum message ID to return</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets">Hash</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>FROM_PEER_INVALID</td><td>The specified from_id is invalid.</td></tr><tr><td>400</td><td>INPUT_FILTER_INVALID</td><td>The specified filter is invalid.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_NOT_SUPPORTED</td><td>The provided peer ID is not supported.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>The search query is empty.</td></tr><tr><td>400</td><td>TAKEOUT_INVALID</td><td>The specified takeout ID is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Search for messages and peers globally

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
