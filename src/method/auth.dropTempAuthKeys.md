---
title: "auth.dropTempAuthKeys"
original: "https://core.telegram.org/method/auth.dropTempAuthKeys"
section: ref
description: "Delete all temporary authorization keys except for the ones specified"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.dropTempAuthKeys","url":"/method/auth.dropTempAuthKeys/"}]
layout: layout.njk
---

# auth.dropTempAuthKeys

Delete all temporary authorization keys **except for** the ones specified

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>except_auth_keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>The auth keys that <strong>shouldn't</strong> be dropped.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method
