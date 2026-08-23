---
title: "messages.getDiscussionMessage"
original: "https://core.telegram.org/method/messages.getDiscussionMessage"
section: ref
description: "Get discussion message from the associated discussion group of a channel to show it on top of the comment section, without actually joining the group"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDiscussionMessage","url":"/method/messages.getDiscussionMessage/"}]
layout: layout.njk
---

# messages.getDiscussionMessage

Get [discussion message](/api/threads/) from the [associated discussion group](/api/discussion/) of a channel to show it on top of the comment section, without actually joining the group

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;
---functions---
messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td><a href="/api/channel">Channel ID</a></td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID</td></tr></tbody></table>

### Result

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TOPIC_ID_INVALID</td><td>The specified topic ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
