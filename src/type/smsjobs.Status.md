---
title: "smsjobs.Status"
original: "https://core.telegram.org/type/smsjobs.Status"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"smsjobs.Status","url":"/type/smsjobs.Status/"}]
layout: layout.njk
---

# smsjobs.Status

Status

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;

---functions---

smsjobs.getStatus#10a698e8 = smsjobs.Status;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/smsjobs.status">smsjobs.status</a></td><td>Status</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.getStatus">smsjobs.getStatus</a></td><td>Get SMS jobs status (official clients only).</td></tr></tbody></table>
