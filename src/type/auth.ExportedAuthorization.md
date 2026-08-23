---
title: "Auth.ExportedAuthorization"
original: "https://core.telegram.org/type/auth.ExportedAuthorization"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Auth.ExportedAuthorization","url":"/type/auth.ExportedAuthorization/"}]
layout: layout.njk
---

# Auth.ExportedAuthorization

Exported authorization

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;

---functions---

auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.exportedAuthorization">auth.exportedAuthorization</a></td><td>Data for copying of authorization between data centers.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.exportAuthorization">auth.exportAuthorization</a></td><td>Returns data for copying authorization to another data-center.</td></tr></tbody></table>
