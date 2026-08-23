---
title: "smsjobs.leave"
original: "https://core.telegram.org/method/smsjobs.leave"
section: ref
description: "Disable SMS jobs (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.leave","url":"/method/smsjobs.leave/"}]
layout: layout.njk
---

# smsjobs.leave

Disable SMS jobs (official clients only).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.leave#9898ad73 = Bool;
```

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>The current user hasn't joined the Peer-to-Peer Login Program.</td></tr></tbody></table>
