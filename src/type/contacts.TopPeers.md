---
title: "Contacts.TopPeers"
original: "https://core.telegram.org/type/contacts.TopPeers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Contacts.TopPeers","url":"/type/contacts.TopPeers/"}]
layout: layout.njk
---

# Contacts.TopPeers

Top peers

```
contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:int limit:int hash:long = contacts.TopPeers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.topPeersNotModified">contacts.topPeersNotModified</a></td><td>Top peer info hasn't changed</td></tr><tr><td><a href="/constructor/contacts.topPeers">contacts.topPeers</a></td><td>Top peers</td></tr><tr><td><a href="/constructor/contacts.topPeersDisabled">contacts.topPeersDisabled</a></td><td>Top peers disabled</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getTopPeers">contacts.getTopPeers</a></td><td>Get most used peers</td></tr></tbody></table>
