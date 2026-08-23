---
title: "TextWithEntities"
original: "https://core.telegram.org/type/TextWithEntities"
section: ref
description: "Styled text with message entities"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"TextWithEntities","url":"/type/TextWithEntities/"}]
layout: layout.njk
---

# TextWithEntities

Styled text with [message entities](/api/entities/)

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

API schema:

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

---functions---

messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/textWithEntities">textWithEntities</a></td><td>Styled text with <a href="/api/entities">message entities</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.summarizeText">messages.summarizeText</a></td><td>Summarize the contents of a message with AI, see <a href="/api/ai#summarize-messages">here »</a> for more info.<br><br>Clients should use <a href="/constructor/message">message</a>.<code>summary_from_language</code> as a hint for showing a summarization button; its absence does not forbid invoking this method.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
