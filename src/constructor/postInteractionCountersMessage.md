---
title: "postInteractionCountersMessage"
original: "https://core.telegram.org/constructor/postInteractionCountersMessage"
section: ref
description: "Interaction counters for a message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"postInteractionCountersMessage","url":"/constructor/postInteractionCountersMessage/"}]
layout: layout.njk
---

# postInteractionCountersMessage

Interaction counters for a message.

```
postInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of views</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of forwards to public channels</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of reactions</td></tr></tbody></table>

### Type

[PostInteractionCounters](/type/PostInteractionCounters/)
