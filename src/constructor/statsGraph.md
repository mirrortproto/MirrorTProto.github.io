---
title: "statsGraph"
original: "https://core.telegram.org/constructor/statsGraph"
section: ref
description: "Telegram offers detailed channel statistics for channels and supergroups."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsGraph","url":"/constructor/statsGraph/"}]
layout: layout.njk
---

# statsGraph

[Channel statistics graph](/api/stats/)

```
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>json</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Statistics data</td></tr><tr><td><strong>zoom_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Zoom token</td></tr></tbody></table>

### Type

[StatsGraph](/type/StatsGraph/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
