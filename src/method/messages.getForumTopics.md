---
title: "messages.getForumTopics"
original: "https://core.telegram.org/method/messages.getForumTopics"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getForumTopics","url":"/method/messages.getForumTopics/"}]
layout: layout.njk
---

# messages.getForumTopics

Get [topics of a forum](/api/forum/)

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
---functions---
messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Search query</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a>, date of the last message of the last found topic. Use 0 or any date in the future to get results from the last topic.</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a>, ID of the last message of the last found topic (or initially <code>0</code>).</td></tr><tr><td><strong>offset_topic</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a>, ID of the last found topic (or initially <code>0</code>).</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a>. For optimal performance, the number of returned topics is chosen by the server and can be smaller than the specified limit.</td></tr></tbody></table>

### Result

[messages.ForumTopics](/type/messages.ForumTopics/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_FORUM_MISSING</td><td>This supergroup is not a forum.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
