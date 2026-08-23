---
title: "InputUser"
original: "https://core.telegram.org/type/InputUser"
section: ref
description: "Defines a user for subsequent interaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputUser","url":"/type/InputUser/"}]
layout: layout.njk
---

# InputUser

Defines a user for subsequent interaction.

```
inputUserEmpty#b98886cf = InputUser;
inputUserSelf#f7c1b13f = InputUser;
inputUser#f21158c6 user_id:long access_hash:long = InputUser;
inputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputUserEmpty">inputUserEmpty</a></td><td>Empty constructor, does not define a user.</td></tr><tr><td><a href="/constructor/inputUserSelf">inputUserSelf</a></td><td>Defines the current user.</td></tr><tr><td><a href="/constructor/inputUser">inputUser</a></td><td>Defines a user for further interaction.</td></tr><tr><td><a href="/constructor/inputUserFromMessage">inputUserFromMessage</a></td><td>Defines a <a href="/api/min">min</a> user that was seen in a certain message of a certain chat.</td></tr></tbody></table>
