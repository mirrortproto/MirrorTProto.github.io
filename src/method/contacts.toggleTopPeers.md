---
title: "contacts.toggleTopPeers"
original: "https://core.telegram.org/method/contacts.toggleTopPeers"
section: ref
description: "If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots,…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.toggleTopPeers","url":"/method/contacts.toggleTopPeers/"}]
layout: layout.njk
---

# contacts.toggleTopPeers

Enable/disable [top peers](/api/top-rating/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.toggleTopPeers#8514bdda enabled:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Enable/disable</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Top peer rating](/api/top-rating/)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
