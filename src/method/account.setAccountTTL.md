---
title: "account.setAccountTTL"
original: "https://core.telegram.org/method/account.setAccountTTL"
section: ref
description: "Set account self-destruction period"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setAccountTTL","url":"/method/account.setAccountTTL/"}]
layout: layout.njk
---

# account.setAccountTTL

Set account self-destruction period

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAccountTTL#2442485e ttl:AccountDaysTTL = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>ttl</strong></td><td style="text-align: center;"><a href="/type/AccountDaysTTL">AccountDaysTTL</a></td><td>Time to live in days</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>The provided TTL is invalid.</td></tr></tbody></table>
