---
title: "timezone"
original: "https://core.telegram.org/constructor/timezone"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"timezone","url":"/constructor/timezone/"}]
layout: layout.njk
---

# timezone

Timezone information.

```
timezone#ff9289f5 id:string name:string utc_offset:int = Timezone;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Unique timezone ID.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Human-readable and localized timezone name.</td></tr><tr><td><strong>utc_offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>UTC offset in seconds, which may be displayed in hh:mm format by the client together with the human-readable name (i.e. <code>$name UTC -01:00</code>).</td></tr></tbody></table>

### Type

[Timezone](/type/Timezone/)
