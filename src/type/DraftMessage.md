---
title: "DraftMessage"
original: "https://core.telegram.org/type/DraftMessage"
section: ref
description: "Represents a message draft."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DraftMessage","url":"/type/DraftMessage/"}]
layout: layout.njk
---

# DraftMessage

Represents a message [draft](/api/drafts/).

```
draftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/draftMessageEmpty">draftMessageEmpty</a></td><td>Empty draft</td></tr><tr><td><a href="/constructor/draftMessage">draftMessage</a></td><td>Represents a message <a href="/api/drafts">draft</a>.</td></tr></tbody></table>

### Related pages

#### [Message drafts](/api/drafts/)

How to handle message drafts
