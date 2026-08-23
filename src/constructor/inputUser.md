---
title: "inputUser"
original: "https://core.telegram.org/constructor/inputUser"
section: ref
description: "Defines a user for further interaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputUser","url":"/constructor/inputUser/"}]
layout: layout.njk
---

# inputUser

Defines a user for further interaction.

```
inputUser#f21158c6 user_id:long access_hash:long = InputUser;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User identifier</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><strong>access_hash</strong> value from the <a href="/constructor/user">user</a> constructor</td></tr></tbody></table>

### Type

[InputUser](/type/InputUser/)

### Related pages

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).
