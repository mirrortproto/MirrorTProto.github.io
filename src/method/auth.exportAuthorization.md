---
title: "auth.exportAuthorization"
original: "https://core.telegram.org/method/auth.exportAuthorization"
section: ref
description: "Returns data for copying authorization to another data-center."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.exportAuthorization","url":"/method/auth.exportAuthorization/"}]
layout: layout.njk
---

# auth.exportAuthorization

Returns data for copying authorization to another data-center.

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
---functions---
auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of a target data-center</td></tr></tbody></table>

### Result

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DC_ID_INVALID</td><td>The provided DC ID is invalid.</td></tr></tbody></table>
