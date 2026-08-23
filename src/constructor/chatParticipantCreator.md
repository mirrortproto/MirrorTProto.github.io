---
title: "chatParticipantCreator"
original: "https://core.telegram.org/constructor/chatParticipantCreator"
section: ref
description: "Represents the creator of the basic group »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatParticipantCreator","url":"/constructor/chatParticipantCreator/"}]
layout: layout.njk
---

# chatParticipantCreator

Represents the creator of the [basic group »](/api/channel/#basic-groups)

```
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>ID of the user that created the group</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>The participant's <a href="/api/rank">tag »</a>.</td></tr></tbody></table>

### Type

[ChatParticipant](/type/ChatParticipant/)

### Related pages

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
