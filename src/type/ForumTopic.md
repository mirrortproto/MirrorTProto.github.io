---
title: "ForumTopic"
original: "https://core.telegram.org/type/ForumTopic"
section: ref
description: "Contains information about a forum topic"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ForumTopic","url":"/type/ForumTopic/"}]
layout: layout.njk
---

# ForumTopic

Contains information about a [forum topic](/api/forum/#forum-topics)

```
forumTopicDeleted#23f109b id:int = ForumTopic;
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/forumTopicDeleted">forumTopicDeleted</a></td><td>Represents a deleted <a href="/api/forum#forum-topics">forum topic</a>.<br><br>This constructor is returned in place of a <a href="/constructor/forumTopic">forumTopic</a> by <a href="/method/messages.getForumTopicsByID">messages.getForumTopicsByID</a> (and the other topic-fetching methods) when a topic no longer exists, allowing clients and bots to confirm that a topic was deleted.</td></tr><tr><td><a href="/constructor/forumTopic">forumTopic</a></td><td>Represents a <a href="/api/forum#forum-topics">forum topic</a>.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
