---
title: "auth.LoggedOut"
original: "https://core.telegram.org/type/auth.LoggedOut"
section: ref
description: "Future auth token » to be used on subsequent authorizations"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.LoggedOut","url":"/type/auth.LoggedOut/"}]
layout: layout.njk
---

# auth.LoggedOut

[Future auth token »](/api/auth/#future-auth-tokens) to be used on subsequent authorizations

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;

---functions---

auth.logOut#3e72ba19 = auth.LoggedOut;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.loggedOut">auth.loggedOut</a></td><td><a href="/api/auth#future-auth-tokens">Future auth token »</a> to be used on subsequent authorizations</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.logOut">auth.logOut</a></td><td>Logs out the user.</td></tr></tbody></table>

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
