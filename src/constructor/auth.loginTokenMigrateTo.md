---
title: "auth.loginTokenMigrateTo"
original: "https://core.telegram.org/constructor/auth.loginTokenMigrateTo"
section: ref
description: "Repeat the query to the specified DC"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.loginTokenMigrateTo","url":"/constructor/auth.loginTokenMigrateTo/"}]
layout: layout.njk
---

# auth.loginTokenMigrateTo

Repeat the query to the specified DC

```
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>DC ID</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Token to use for login</td></tr></tbody></table>

### Type

[auth.LoginToken](/type/auth.LoginToken/)
