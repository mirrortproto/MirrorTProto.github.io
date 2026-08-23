---
title: "ChatParticipants"
original: "https://core.telegram.org/type/ChatParticipants"
section: ref
description: "Contains the full list of members of basic groups »; is NOT usable for supergroups/channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatParticipants","url":"/type/ChatParticipants/"}]
layout: layout.njk
---

# ChatParticipants

Contains the full list of members of [basic groups »](/api/channel/#basic-groups); is **NOT** usable for supergroups/channels.

```
chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipantsForbidden">chatParticipantsForbidden</a></td><td>The full list of members of <a href="/api/channel#basic-groups">basic groups »</a> is not available to you, because you were banned.</td></tr><tr><td><a href="/constructor/chatParticipants">chatParticipants</a></td><td>Contains the full list of members of <a href="/api/channel#basic-groups">basic groups »</a>; is <strong>NOT</strong> usable for supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
