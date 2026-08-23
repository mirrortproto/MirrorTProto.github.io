---
title: "statsGroupTopPoster"
original: "https://core.telegram.org/constructor/statsGroupTopPoster"
section: ref
description: "Information about an active user in a supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsGroupTopPoster","url":"/constructor/statsGroupTopPoster/"}]
layout: layout.njk
---

# statsGroupTopPoster

Information about an active user in a supergroup

```
statsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User ID</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of messages for <a href="/api/stats">statistics</a> period in consideration</td></tr><tr><td><strong>avg_chars</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Average number of characters per message</td></tr></tbody></table>

### Type

[StatsGroupTopPoster](/type/StatsGroupTopPoster/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
