---
title: "channels.checkUsername"
original: "https://core.telegram.org/method/channels.checkUsername"
section: ref
description: "Check if a username is free and can be assigned to a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.checkUsername","url":"/method/channels.checkUsername/"}]
layout: layout.njk
---

# channels.checkUsername

Check if a username is free and can be assigned to a channel/supergroup

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>The <a href="/api/channel">channel/supergroup</a> that will assigned the specified username</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The username to check</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>You're admin of too many public channels, make some channels private to change the username of this channel.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>The specified username can be purchased on <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
