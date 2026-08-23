---
title: "smsjobs.status"
original: "https://core.telegram.org/constructor/smsjobs.status"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"smsjobs.status","url":"/constructor/smsjobs.status/"}]
layout: layout.njk
---

# smsjobs.status

Status

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Allow international numbers</td></tr><tr><td><strong>recent_sent</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Recently sent</td></tr><tr><td><strong>recent_since</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Since</td></tr><tr><td><strong>recent_remains</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Remaining</td></tr><tr><td><strong>total_sent</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total sent</td></tr><tr><td><strong>total_since</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total since</td></tr><tr><td><strong>last_gift_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Last gift deep link</td></tr><tr><td><strong>terms_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Terms of service URL</td></tr></tbody></table>

### Type

[smsjobs.Status](/type/smsjobs.Status/)
