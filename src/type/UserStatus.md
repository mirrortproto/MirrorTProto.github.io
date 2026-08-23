---
title: "UserStatus"
original: "https://core.telegram.org/type/UserStatus"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"UserStatus","url":"/type/UserStatus/"}]
layout: layout.njk
---

# UserStatus

User online status

```
userStatusEmpty#9d05049 = UserStatus;
userStatusOnline#edb93949 expires:int = UserStatus;
userStatusOffline#8c703f was_online:int = UserStatus;
userStatusRecently#7b197dc8 flags:# by_me:flags.0?true = UserStatus;
userStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;
userStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/userStatusEmpty">userStatusEmpty</a></td><td>User status has not been set yet.</td></tr><tr><td><a href="/constructor/userStatusOnline">userStatusOnline</a></td><td>Online status of the user.</td></tr><tr><td><a href="/constructor/userStatusOffline">userStatusOffline</a></td><td>The user's offline status.</td></tr><tr><td><a href="/constructor/userStatusRecently">userStatusRecently</a></td><td>Online status: last seen recently</td></tr><tr><td><a href="/constructor/userStatusLastWeek">userStatusLastWeek</a></td><td>Online status: last seen last week</td></tr><tr><td><a href="/constructor/userStatusLastMonth">userStatusLastMonth</a></td><td>Online status: last seen last month</td></tr></tbody></table>
