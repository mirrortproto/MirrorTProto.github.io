---
title: "attachMenuBots"
original: "https://core.telegram.org/constructor/attachMenuBots"
section: ref
description: "Represents a list of bot mini apps that can be launched from the attachment menu »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"attachMenuBots","url":"/constructor/attachMenuBots/"}]
layout: layout.njk
---

# attachMenuBots

Represents a list of [bot mini apps that can be launched from the attachment menu »](/api/bots/attach/)

```
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AttachMenuBot">AttachMenuBot</a>&gt;</td><td>List of <a href="/api/bots/attach">bot mini apps that can be launched from the attachment menu »</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Info about related users/bots</td></tr></tbody></table>

### Type

[AttachMenuBots](/type/AttachMenuBots/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
