---
title: "auth.loggedOut"
original: "https://core.telegram.org/constructor/auth.loggedOut"
section: ref
description: "Future auth token » to be used on subsequent authorizations"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.loggedOut","url":"/constructor/auth.loggedOut/"}]
layout: layout.njk
---

# auth.loggedOut

[Future auth token »](/api/auth/#future-auth-tokens) to be used on subsequent authorizations

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>future_auth_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td><a href="/api/auth#future-auth-tokens">Future auth token »</a> to be used on subsequent authorizations</td></tr></tbody></table>

### Type

[auth.LoggedOut](/type/auth.LoggedOut/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
