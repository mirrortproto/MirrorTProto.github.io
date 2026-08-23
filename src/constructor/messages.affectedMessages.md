---
title: "messages.affectedMessages"
original: "https://core.telegram.org/constructor/messages.affectedMessages"
section: ref
description: "Events affected by operation"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.affectedMessages","url":"/constructor/messages.affectedMessages/"}]
layout: layout.njk
---

# messages.affectedMessages

Events affected by operation

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Number of events that were generated</a></td></tr></tbody></table>

### Type

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
