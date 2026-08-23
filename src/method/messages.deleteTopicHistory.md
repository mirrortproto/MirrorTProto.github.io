---
title: "messages.deleteTopicHistory"
original: "https://core.telegram.org/method/messages.deleteTopicHistory"
section: ref
description: "Delete message history of a forum topic"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteTopicHistory","url":"/method/messages.deleteTopicHistory/"}]
layout: layout.njk
---

# messages.deleteTopicHistory

Delete message history of a [forum topic](/api/forum/)

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Topic ID</td></tr></tbody></table>

### Result

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
