---
title: "phone.groupCall"
original: "https://core.telegram.org/constructor/phone.groupCall"
section: ref
description: "Contains group call information and an initial participant page, see getting info about a group call »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.groupCall","url":"/constructor/phone.groupCall/"}]
layout: layout.njk
---

# phone.groupCall

Contains group call information and an initial participant page, see [getting info about a group call »](/api/group-calls/#getting-info-about-a-group-call).

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/GroupCall">GroupCall</a></td><td>Info about the group call</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipant">GroupCallParticipant</a>&gt;</td><td>A partial list of participants.</td></tr><tr><td><strong>participants_next_offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Next offset to use when fetching the remaining participants using <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a></td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Chats mentioned in the participants vector</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Users mentioned in the participants vector</td></tr></tbody></table>

### Type

[phone.GroupCall](/type/phone.GroupCall/)

### Related pages

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](/api/group-calls/#getting-info-about-a-group-call) participants.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
