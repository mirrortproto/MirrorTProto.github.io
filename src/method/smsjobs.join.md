---
title: "smsjobs.join"
original: "https://core.telegram.org/method/smsjobs.join"
section: ref
description: "Enable SMS jobs (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.join","url":"/method/smsjobs.join/"}]
layout: layout.njk
---

# smsjobs.join

Enable SMS jobs (official clients only).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.join#a74ece2d = Bool;
```

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_ELIGIBLE</td><td>The current user is not eligible to join the Peer-to-Peer Login Program.</td></tr></tbody></table>
