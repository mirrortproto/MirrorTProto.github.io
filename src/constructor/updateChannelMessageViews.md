---
title: "updateChannelMessageViews"
original: "https://core.telegram.org/constructor/updateChannelMessageViews"
section: ref
description: "The view counter of a message in a channel has changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelMessageViews","url":"/constructor/updateChannelMessageViews/"}]
layout: layout.njk
---

# updateChannelMessageViews

The view counter of a message in a channel has changed

```
updateChannelMessageViews#f226ac08 channel_id:long id:int views:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Channel ID</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the message</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>New view counter</td></tr></tbody></table>

### Type

[Update](/type/Update/)
