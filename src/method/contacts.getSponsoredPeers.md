---
title: "contacts.getSponsoredPeers"
original: "https://core.telegram.org/method/contacts.getSponsoredPeers"
section: ref
description: "Obtain a list of sponsored peer search results for a given query"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getSponsoredPeers","url":"/method/contacts.getSponsoredPeers/"}]
layout: layout.njk
---

# contacts.getSponsoredPeers

Obtain a list of sponsored peer search results for a given query

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
---functions---
contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The query</td></tr></tbody></table>

### Result

[contacts.SponsoredPeers](/type/contacts.SponsoredPeers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>The search query is empty.</td></tr></tbody></table>
