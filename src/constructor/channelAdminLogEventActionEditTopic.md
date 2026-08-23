---
title: "channelAdminLogEventActionEditTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionEditTopic"
section: ref
description: "ChannelAdminLogEventAction"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionEditTopic","url":"/constructor/channelAdminLogEventActionEditTopic/"}]
layout: layout.njk
---

# channelAdminLogEventActionEditTopic

A [forum topic](/api/forum/#forum-topics) was edited

```
channelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic">ForumTopic</a></td><td>Previous topic information</td></tr><tr><td><strong>new_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic">ForumTopic</a></td><td>New topic information</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
