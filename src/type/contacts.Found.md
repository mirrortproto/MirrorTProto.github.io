---
title: "contacts.Found"
original: "https://core.telegram.org/type/contacts.Found"
section: ref
description: "Object contains info on users found by name substring and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Found","url":"/type/contacts.Found/"}]
layout: layout.njk
---

# contacts.Found

Object contains info on users found by name substring and auxiliary data.

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;

---functions---

contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.found">contacts.found</a></td><td>Users found by name substring and auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.search">contacts.search</a></td><td>Returns users found by username substring.</td></tr></tbody></table>
