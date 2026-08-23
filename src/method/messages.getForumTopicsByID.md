---
title: "messages.getForumTopicsByID"
original: "https://core.telegram.org/method/messages.getForumTopicsByID"
section: ref
description: "Get forum topics by their ID"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getForumTopicsByID","url":"/method/messages.getForumTopicsByID/"}]
layout: layout.njk
---

# messages.getForumTopicsByID

Get forum topics by their ID

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
---functions---
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Topic IDs</td></tr></tbody></table>

### Result

[messages.ForumTopics](/type/messages.ForumTopics/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>TOPICS_EMPTY</td><td>You specified no topic IDs.</td></tr></tbody></table>
