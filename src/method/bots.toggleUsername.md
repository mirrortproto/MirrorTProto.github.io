---
title: "bots.toggleUsername"
original: "https://core.telegram.org/method/bots.toggleUsername"
section: ref
description: "Activate or deactivate a purchased fragment.com username associated to a bot we own."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.toggleUsername","url":"/method/bots.toggleUsername/"}]
layout: layout.njk
---

# bots.toggleUsername

Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a bot we own.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.toggleUsername#53ca973 bot:InputUser username:string active:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Username</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether to activate or deactivate it</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>The username was not modified.</td></tr></tbody></table>
