---
title: "messageEntityMentionName"
original: "https://core.telegram.org/constructor/messageEntityMentionName"
section: ref
description: "Message entity representing a user mention: for _creating_ a mention use inputMessageEntityMentionName."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityMentionName","url":"/constructor/messageEntityMentionName/"}]
layout: layout.njk
---

# messageEntityMentionName

Message entity representing a [user mention](/api/mentions/): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).

```
messageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Offset of message entity within message (in <a href="/api/entities#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Length of message entity within message (in <a href="/api/entities#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Identifier of the user that was mentioned</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/)

Message entity that can be used to create a user [user mention](/api/mentions/): received mentions use the [messageEntityMentionName](/constructor/messageEntityMentionName/) constructor, instead.
