---
title: "messages.getAttachMenuBots"
original: "https://core.telegram.org/method/messages.getAttachMenuBots"
section: ref
description: "Returns installed attachment menu bot mini apps »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAttachMenuBots","url":"/method/messages.getAttachMenuBots/"}]
layout: layout.njk
---

# messages.getAttachMenuBots

Returns installed attachment menu [bot mini apps »](/api/bots/attach/)

```
attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
---functions---
messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[AttachMenuBots](/type/AttachMenuBots/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
