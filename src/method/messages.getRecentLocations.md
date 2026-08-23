---
title: "messages.getRecentLocations"
original: "https://core.telegram.org/method/messages.getRecentLocations"
section: ref
description: "Get all recent live locations sent to a specific chat: returns up to 1 location message (messageMediaGeoLive) per chat participant."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getRecentLocations","url":"/method/messages.getRecentLocations/"}]
layout: layout.njk
---

# messages.getRecentLocations

Get all recent [live locations](/api/live-location/) sent to a specific chat: returns up to 1 location message ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) per chat participant.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getRecentLocations#702a40e0 peer:InputPeer limit:int hash:long = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Target group or private chat.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Live geolocation](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.

#### [messageMediaGeoLive](/constructor/messageMediaGeoLive/)

Indicates a [live geolocation](/api/live-location/)
