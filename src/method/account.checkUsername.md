---
title: "account.checkUsername"
original: "https://core.telegram.org/method/account.checkUsername"
section: ref
description: "Validates a username and checks availability."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.checkUsername","url":"/method/account.checkUsername/"}]
layout: layout.njk
---

# account.checkUsername

Validates a username and checks availability.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.checkUsername#2714d86c username:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>username<br>Accepted characters: A-z (case-insensitive), 0-9 and underscores.<br>Length: 5-32 characters.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>The specified username can be purchased on <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>
