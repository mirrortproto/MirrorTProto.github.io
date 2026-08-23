---
title: "auth.exportedAuthorization"
original: "https://core.telegram.org/constructor/auth.exportedAuthorization"
section: ref
description: "Data for copying of authorization between data centers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.exportedAuthorization","url":"/constructor/auth.exportedAuthorization/"}]
layout: layout.njk
---

# auth.exportedAuthorization

Data for copying of authorization between data centers.

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>current user identifier</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>authorizes key</td></tr></tbody></table>

### Type

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)
