---
title: "channelAdminLogEventActionCreateTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionCreateTopic"
section: ref
description: "A forum topic was created"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionCreateTopic","url":"/constructor/channelAdminLogEventActionCreateTopic/"}]
layout: layout.njk
---

# channelAdminLogEventActionCreateTopic

A [forum topic](/api/forum/#forum-topics) was created

```
channelAdminLogEventActionCreateTopic#58707d28 topic:ForumTopic = ChannelAdminLogEventAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic">ForumTopic</a></td><td>The <a href="/api/forum#forum-topics">forum topic</a> that was created</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
