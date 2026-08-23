---
title: "account.setAuthorizationTTL"
original: "https://core.telegram.org/method/account.setAuthorizationTTL"
section: ref
description: "Set time-to-live of current session"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setAuthorizationTTL","url":"/method/account.setAuthorizationTTL/"}]
layout: layout.njk
---

# account.setAuthorizationTTL

Set time-to-live of current session

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAuthorizationTTL#bf899aa0 authorization_ttl_days:int = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>authorization_ttl_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Time-to-live of current session in days</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>You can't logout other sessions if less than 24 hours have passed since you logged on the current session.</td></tr><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>The provided TTL is invalid.</td></tr></tbody></table>
