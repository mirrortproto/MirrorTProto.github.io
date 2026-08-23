---
title: "username"
original: "https://core.telegram.org/constructor/username"
section: ref
description: "Contains information about a username."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"username","url":"/constructor/username/"}]
layout: layout.njk
---

# username

Contains information about a username.

```
username#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>editable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether the username is editable, meaning it wasn't bought on <a href="https://fragment.com">fragment</a>.</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether the username is active.</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The username.</td></tr></tbody></table>

### Type

[Username](/type/Username/)
