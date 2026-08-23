---
title: "phone.GroupCall"
original: "https://core.telegram.org/type/phone.GroupCall"
section: ref
description: "Contains info about a group call, and partial info about its participants."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupCall","url":"/type/phone.GroupCall/"}]
layout: layout.njk
---

# phone.GroupCall

Contains info about a group call, and partial info about its participants.

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;

---functions---

phone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCall">phone.groupCall</a></td><td>Contains group call information and an initial participant page, see <a href="/api/group-calls#getting-info-about-a-group-call">getting info about a group call »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCall">phone.getGroupCall</a></td><td>Get info about a <a href="/api/group-calls#getting-info-about-a-group-call">group call</a> and its participants.</td></tr></tbody></table>
