---
title: "MessageReplies"
original: "https://core.telegram.org/type/MessageReplies"
section: ref
description: "Info about post comments (for channels) or message replies (for groups)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageReplies","url":"/type/MessageReplies/"}]
layout: layout.njk
---

# MessageReplies

Info about [post comments (for channels) or message replies (for groups)](/api/threads/)

```
messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageReplies">messageReplies</a></td><td>Info about <a href="/api/threads">the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic</a> (all features ultimately based on message threads).</td></tr></tbody></table>

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
