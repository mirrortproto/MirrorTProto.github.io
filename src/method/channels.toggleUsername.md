---
title: "channels.toggleUsername"
original: "https://core.telegram.org/method/channels.toggleUsername"
section: ref
description: "Activate or deactivate a purchased fragment.com username associated to a supergroup or channel we own."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.toggleUsername","url":"/method/channels.toggleUsername/"}]
layout: layout.njk
---

# channels.toggleUsername

Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a [supergroup or channel](/api/channel/) we own.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Supergroup or channel</a></td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Username</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether to activate or deactivate the username</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>USERNAMES_ACTIVE_TOO_MUCH</td><td>The maximum number of active usernames was reached.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>The username was not modified.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
