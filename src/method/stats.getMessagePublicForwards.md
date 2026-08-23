---
title: "stats.getMessagePublicForwards"
original: "https://core.telegram.org/method/stats.getMessagePublicForwards"
section: ref
description: "Obtains a list of messages, indicating to which other public channels was a channel message forwarded."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getMessagePublicForwards","url":"/method/stats.getMessagePublicForwards/"}]
layout: layout.njk
---

# stats.getMessagePublicForwards

Obtains a list of messages, indicating to which other public channels was a channel message forwarded.  
Will return a list of [messages](/constructor/message/) with `peer_id` equal to the public channel to which this message was forwarded.

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
---functions---
stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Source channel</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Source message ID</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Offset for <a href="/api/offsets">pagination</a>, empty string on first call, then use the <code>next_offset</code> field of the returned constructor (if present, otherwise no more results are available).</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[stats.PublicForwards](/type/stats.PublicForwards/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [message](/constructor/message/)

A message
