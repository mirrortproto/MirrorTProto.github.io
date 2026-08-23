---
title: "contacts.editCloseFriends"
original: "https://core.telegram.org/method/contacts.editCloseFriends"
section: ref
description: "Edit the close friends list, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.editCloseFriends","url":"/method/contacts.editCloseFriends/"}]
layout: layout.njk
---

# contacts.editCloseFriends

Edit the [close friends list, see here »](/api/privacy/) for more info.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Full list of user IDs of close friends, see <a href="/api/privacy">here</a> for more info.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.
