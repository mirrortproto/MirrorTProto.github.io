---
title: "GroupCallMessage"
original: "https://core.telegram.org/type/GroupCallMessage"
section: ref
description: "Represents an in-call message, emoji reaction », paid live story comment or standalone paid live story donation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GroupCallMessage","url":"/type/GroupCallMessage/"}]
layout: layout.njk
---

# GroupCallMessage

Represents an in-call message, [emoji reaction »](/api/group-calls/#in-call-reactions), paid live story comment or standalone paid live story donation.

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

API schema:

```
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallMessage">groupCallMessage</a></td><td>Represents an <a href="/api/group-calls#in-call-messages">in-call message »</a>, emoji reaction, paid live story comment or standalone paid live story donation.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
