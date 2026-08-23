---
title: "messages.searchSentMedia"
original: "https://core.telegram.org/method/messages.searchSentMedia"
section: ref
description: "View and search recently sent media."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchSentMedia","url":"/method/messages.searchSentMedia/"}]
layout: layout.njk
---

# messages.searchSentMedia

View and search recently sent media.  
This method does not support pagination.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.searchSentMedia#107e31a0 q:string filter:MessagesFilter limit:int = messages.Messages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Optional search query</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Message filter</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return (max 100).</td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr></tbody></table>
