---
title: "updateUserStatus"
original: "https://core.telegram.org/constructor/updateUserStatus"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateUserStatus","url":"/constructor/updateUserStatus/"}]
layout: layout.njk
---

# updateUserStatus

Contact status update.

```
updateUserStatus#e5bdf8de user_id:long status:UserStatus = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User identifier</td></tr><tr><td><strong>status</strong></td><td style="text-align: center;"><a href="/type/UserStatus">UserStatus</a></td><td>New status</td></tr></tbody></table>

### Type

[Update](/type/Update/)
