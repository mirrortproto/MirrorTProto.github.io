---
title: "channelAdminLogEventActionChangePeerColor"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangePeerColor"
section: ref
description: "The message accent color was changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionChangePeerColor","url":"/constructor/channelAdminLogEventActionChangePeerColor/"}]
layout: layout.njk
---

# channelAdminLogEventActionChangePeerColor

The [message accent color](/api/colors/) was changed

```
channelAdminLogEventActionChangePeerColor#5796e780 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/PeerColor">PeerColor</a></td><td>Previous accent palette</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/PeerColor">PeerColor</a></td><td>New accent palette</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
