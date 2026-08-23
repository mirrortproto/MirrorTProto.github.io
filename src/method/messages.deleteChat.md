---
title: "messages.deleteChat"
original: "https://core.telegram.org/method/messages.deleteChat"
section: ref
description: "How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteChat","url":"/method/messages.deleteChat/"}]
layout: layout.njk
---

# messages.deleteChat

Delete a [chat](/api/channel/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteChat#5bd0ee50 chat_id:long = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Chat ID</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
