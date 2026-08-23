---
title: "messages.ForumTopics"
original: "https://core.telegram.org/type/messages.ForumTopics"
section: ref
description: "Contains information about multiple forum topics"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.ForumTopics","url":"/type/messages.ForumTopics/"}]
layout: layout.njk
---

# messages.ForumTopics

Contains information about multiple [forum topics](/api/forum/#forum-topics)

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;

---functions---

messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.forumTopics">messages.forumTopics</a></td><td>Contains information about multiple <a href="/api/forum#forum-topics">forum topics</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getForumTopics">messages.getForumTopics</a></td><td>Get <a href="/api/forum">topics of a forum</a></td></tr><tr><td><a href="/method/messages.getForumTopicsByID">messages.getForumTopicsByID</a></td><td>Get forum topics by their ID</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
