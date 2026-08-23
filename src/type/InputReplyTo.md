---
title: "InputReplyTo"
original: "https://core.telegram.org/type/InputReplyTo"
section: ref
description: "Contains info about a message or story to reply to."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputReplyTo","url":"/type/InputReplyTo/"}]
layout: layout.njk
---

# InputReplyTo

Contains info about a message or story to reply to.

```
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
inputReplyToStory#5881323a peer:InputPeer story_id:int = InputReplyTo;
inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputReplyToMessage">inputReplyToMessage</a></td><td>Reply to a message.</td></tr><tr><td><a href="/constructor/inputReplyToStory">inputReplyToStory</a></td><td>Reply to a story.</td></tr><tr><td><a href="/constructor/inputReplyToMonoForum">inputReplyToMonoForum</a></td><td>Used to send messages to a <a href="/api/monoforum">monoforum topic</a>.</td></tr></tbody></table>
