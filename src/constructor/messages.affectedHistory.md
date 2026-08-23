---
title: "messages.affectedHistory"
original: "https://core.telegram.org/constructor/messages.affectedHistory"
section: ref
description: "Affected part of communication history with the user or in a chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.affectedHistory","url":"/constructor/messages.affectedHistory/"}]
layout: layout.njk
---

# messages.affectedHistory

Affected part of communication history with the user or in a chat.

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of events occurred in a text box</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of affected events</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>If a parameter contains positive value, it is necessary to repeat the method call using the given value; during the proceeding of all the history the value itself shall gradually decrease</td></tr></tbody></table>

### Type

[messages.AffectedHistory](/type/messages.AffectedHistory/)
