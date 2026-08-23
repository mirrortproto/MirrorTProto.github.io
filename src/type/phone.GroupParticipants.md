---
title: "phone.GroupParticipants"
original: "https://core.telegram.org/type/phone.GroupParticipants"
section: ref
description: "Info about the participants of a group call or livestream"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupParticipants","url":"/type/phone.GroupParticipants/"}]
layout: layout.njk
---

# phone.GroupParticipants

Info about the participants of a group call or livestream

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;

---functions---

phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupParticipants">phone.groupParticipants</a></td><td>Contains a page of group call participants, see <a href="/api/group-calls#getting-info-about-a-group-call">getting info about a group call »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a></td><td>Get <a href="/api/group-calls#getting-info-about-a-group-call">group call</a> participants.</td></tr></tbody></table>
