---
title: "users.UserFull"
original: "https://core.telegram.org/type/users.UserFull"
section: ref
description: "Full user information, with attached context peers for reactions"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.UserFull","url":"/type/users.UserFull/"}]
layout: layout.njk
---

# users.UserFull

Full user information, with attached context peers for reactions

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/users.userFull">users.userFull</a></td><td>Full user information</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/users.getFullUser">users.getFullUser</a></td><td>Returns extended user info by ID.</td></tr></tbody></table>
