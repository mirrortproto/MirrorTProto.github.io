---
title: "messageEntityEmail"
original: "https://core.telegram.org/constructor/messageEntityEmail"
section: ref
description: "Message entity representing an email@example.com."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityEmail","url":"/constructor/messageEntityEmail/"}]
layout: layout.njk
---

# messageEntityEmail

Message entity representing an [email@example.com](mailto:email@example.com).

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
```

#### API schema

```
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Offset of message entity within message (in <a href="/api/entities#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Length of message entity within message (in <a href="/api/entities#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
