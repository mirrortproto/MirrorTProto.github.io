---
title: "contacts.SponsoredPeers"
original: "https://core.telegram.org/type/contacts.SponsoredPeers"
section: ref
description: "A list of sponsored peers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.SponsoredPeers","url":"/type/contacts.SponsoredPeers/"}]
layout: layout.njk
---

# contacts.SponsoredPeers

A list of sponsored peers.

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;

---functions---

contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.sponsoredPeersEmpty">contacts.sponsoredPeersEmpty</a></td><td>There are no sponsored peers for this query.</td></tr><tr><td><a href="/constructor/contacts.sponsoredPeers">contacts.sponsoredPeers</a></td><td>Sponsored peers.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getSponsoredPeers">contacts.getSponsoredPeers</a></td><td>Obtain a list of sponsored peer search results for a given query</td></tr></tbody></table>
