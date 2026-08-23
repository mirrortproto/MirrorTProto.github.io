---
title: "exportedContactToken"
original: "https://core.telegram.org/constructor/exportedContactToken"
section: ref
description: "Describes a temporary profile link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"exportedContactToken","url":"/constructor/exportedContactToken/"}]
layout: layout.njk
---

# exportedContactToken

Describes a [temporary profile link](/api/links/#temporary-profile-links).

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The <a href="/api/links#temporary-profile-links">temporary profile link</a>.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Its expiration date</td></tr></tbody></table>

### Type

[ExportedContactToken](/type/ExportedContactToken/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
