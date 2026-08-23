---
title: "account.resetWebAuthorization"
original: "https://core.telegram.org/method/account.resetWebAuthorization"
section: ref
description: "Log out an active web telegram login session"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.resetWebAuthorization","url":"/method/account.resetWebAuthorization/"}]
layout: layout.njk
---

# account.resetWebAuthorization

Log out an active web [telegram login](https://core.telegram.org/widgets/login) session

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resetWebAuthorization#2d01b9ef hash:long = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/constructor/webAuthorization">Session</a> hash</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>The provided hash is invalid.</td></tr></tbody></table>

### Related pages

#### [webAuthorization](/constructor/webAuthorization/)

Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login)

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)
