---
title: "smsjobs.getStatus"
original: "https://core.telegram.org/method/smsjobs.getStatus"
section: ref
description: "Get SMS jobs status (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.getStatus","url":"/method/smsjobs.getStatus/"}]
layout: layout.njk
---

# smsjobs.getStatus

Get SMS jobs status (official clients only).

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
---functions---
smsjobs.getStatus#10a698e8 = smsjobs.Status;
```

### Parameters

This constructor does not require any parameters.

### Result

[smsjobs.Status](/type/smsjobs.Status/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>The current user hasn't joined the Peer-to-Peer Login Program.</td></tr></tbody></table>
