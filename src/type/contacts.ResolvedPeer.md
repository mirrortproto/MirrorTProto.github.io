---
title: "Contacts.ResolvedPeer"
original: "https://core.telegram.org/type/contacts.ResolvedPeer"
section: ref
description: "Peer returned after resolving a @username"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Contacts.ResolvedPeer","url":"/type/contacts.ResolvedPeer/"}]
layout: layout.njk
---

# Contacts.ResolvedPeer

Peer returned after resolving a `@username`

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.resolvedPeer">contacts.resolvedPeer</a></td><td>Resolved peer</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.resolveUsername">contacts.resolveUsername</a></td><td>Resolve a @username to get peer info</td></tr><tr><td><a href="/method/contacts.resolvePhone">contacts.resolvePhone</a></td><td>Resolve a phone number to get user info, if their privacy settings allow it.<br><br>Make sure to implement client-side ratelimiting/debounce for this method, allowing at most 1 call every 3 seconds.</td></tr></tbody></table>
