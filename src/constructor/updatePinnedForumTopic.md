---
title: "updatePinnedForumTopic"
original: "https://core.telegram.org/constructor/updatePinnedForumTopic"
section: ref
description: "A forum topic » was pinned or unpinned."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedForumTopic","url":"/constructor/updatePinnedForumTopic/"}]
layout: layout.njk
---

# updatePinnedForumTopic

A [forum topic »](/api/forum/#forum-topics) was pinned or unpinned.

```
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether the topic was pinned or unpinned</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>topic_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The topic ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
