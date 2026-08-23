---
title: "groupCallDiscarded"
original: "https://core.telegram.org/constructor/groupCallDiscarded"
section: ref
description: "Describes an ended group call."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCallDiscarded","url":"/constructor/groupCallDiscarded/"}]
layout: layout.njk
---

# groupCallDiscarded

Describes an ended [group call](/api/group-calls/).

```
groupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Group call ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Group call access hash</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Group call duration</td></tr></tbody></table>

### Type

[GroupCall](/type/GroupCall/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
