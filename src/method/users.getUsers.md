---
title: "users.getUsers"
original: "https://core.telegram.org/method/users.getUsers"
section: ref
description: "Returns basic user info according to their identifiers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.getUsers","url":"/method/users.getUsers/"}]
layout: layout.njk
---

# users.getUsers

Returns basic user info according to their identifiers.

```
---functions---
users.getUsers#d91a548 id:Vector<InputUser> = Vector<User>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>List of user identifiers</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)\>

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>FROM_MESSAGE_BOT_DISABLED</td><td>Bots can't use fromMessage min constructors.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
