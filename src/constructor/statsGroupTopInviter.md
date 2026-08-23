---
title: "statsGroupTopInviter"
original: "https://core.telegram.org/constructor/statsGroupTopInviter"
section: ref
description: "Information about an active supergroup inviter"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsGroupTopInviter","url":"/constructor/statsGroupTopInviter/"}]
layout: layout.njk
---

# statsGroupTopInviter

Information about an active supergroup inviter

```
statsGroupTopInviter#535f779d user_id:long invitations:int = StatsGroupTopInviter;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User ID</td></tr><tr><td><strong>invitations</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of invitations for <a href="/api/stats">statistics</a> period in consideration</td></tr></tbody></table>

### Type

[StatsGroupTopInviter](/type/StatsGroupTopInviter/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
