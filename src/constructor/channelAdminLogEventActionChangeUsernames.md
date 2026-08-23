---
title: "channelAdminLogEventActionChangeUsernames"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeUsernames"
section: ref
description: "The list of usernames associated with the channel was changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionChangeUsernames","url":"/constructor/channelAdminLogEventActionChangeUsernames/"}]
layout: layout.njk
---

# channelAdminLogEventActionChangeUsernames

The list of usernames associated with the channel was changed

```
channelAdminLogEventActionChangeUsernames#f04fb3a9 prev_value:Vector<string> new_value:Vector<string> = ChannelAdminLogEventAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Previous set of usernames</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>New set of usernames</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)
