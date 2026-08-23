---
title: "bots.canSendMessage"
original: "https://core.telegram.org/method/bots.canSendMessage"
section: ref
description: "Check whether the specified bot can send us messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.canSendMessage","url":"/method/bots.canSendMessage/"}]
layout: layout.njk
---

# bots.canSendMessage

Check whether the specified bot can send us messages

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.canSendMessage#1359f4e6 bot:InputUser = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>
