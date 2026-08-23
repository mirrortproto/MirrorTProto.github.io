---
title: "auth.sentCodeSuccess"
original: "https://core.telegram.org/constructor/auth.sentCodeSuccess"
section: ref
description: "The user successfully authorized using future auth tokens"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeSuccess","url":"/constructor/auth.sentCodeSuccess/"}]
layout: layout.njk
---

# auth.sentCodeSuccess

The user successfully authorized using [future auth tokens](/api/auth/#future-auth-tokens)

```
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>authorization</strong></td><td style="text-align: center;"><a href="/type/auth.Authorization">auth.Authorization</a></td><td>Authorization info</td></tr></tbody></table>

### Type

[auth.SentCode](/type/auth.SentCode/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
