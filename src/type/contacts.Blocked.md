---
title: "contacts.Blocked"
original: "https://core.telegram.org/type/contacts.Blocked"
section: ref
description: "Info on users from the current user's black list."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Blocked","url":"/type/contacts.Blocked/"}]
layout: layout.njk
---

# contacts.Blocked

Info on users from the current user's black list.

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;

---functions---

contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.blocked">contacts.blocked</a></td><td>Full list of blocked users.</td></tr><tr><td><a href="/constructor/contacts.blockedSlice">contacts.blockedSlice</a></td><td>Incomplete list of blocked users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getBlocked">contacts.getBlocked</a></td><td>Returns the list of blocked users.</td></tr></tbody></table>
