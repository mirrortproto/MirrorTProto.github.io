---
title: "account.invalidateSignInCodes"
original: "https://core.telegram.org/method/account.invalidateSignInCodes"
section: ref
description: "Invalidate the specified login codes, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.invalidateSignInCodes","url":"/method/account.invalidateSignInCodes/"}]
layout: layout.njk
---

# account.invalidateSignInCodes

Invalidate the specified login codes, see [here »](/api/auth/#invalidating-login-codes) for more info.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.invalidateSignInCodes#ca8ae8ba codes:Vector<string> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>The login codes to invalidate.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
