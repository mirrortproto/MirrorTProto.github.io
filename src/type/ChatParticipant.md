---
title: "ChatParticipant"
original: "https://core.telegram.org/type/ChatParticipant"
section: ref
description: "Details of a group member."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatParticipant","url":"/type/ChatParticipant/"}]
layout: layout.njk
---

# ChatParticipant

Details of a group member.

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipant">chatParticipant</a></td><td><a href="/api/channel#basic-groups">Basic group</a> member (not usable by supergroups).</td></tr><tr><td><a href="/constructor/chatParticipantCreator">chatParticipantCreator</a></td><td>Represents the creator of the <a href="/api/channel#basic-groups">basic group »</a></td></tr><tr><td><a href="/constructor/chatParticipantAdmin">chatParticipantAdmin</a></td><td><a href="/api/channel#basic-groups">Basic group</a> admin (not usable by supergroups).</td></tr></tbody></table>
