---
title: "bots.setBotGroupDefaultAdminRights"
original: "https://core.telegram.org/method/bots.setBotGroupDefaultAdminRights"
section: ref
description: "Set the default suggested admin rights for bots being added as admins to groups, see here for more info on how to handle them »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setBotGroupDefaultAdminRights","url":"/method/bots.setBotGroupDefaultAdminRights/"}]
layout: layout.njk
---

# bots.setBotGroupDefaultAdminRights

Set the default [suggested admin rights](/api/rights/#suggested-bot-rights) for bots being added as admins to groups, see [here for more info on how to handle them »](/api/rights/#suggested-bot-rights).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotGroupDefaultAdminRights#925ec9ea admin_rights:ChatAdminRights = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Admin rights</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RIGHTS_NOT_MODIFIED</td><td>The new admin rights are equal to the old rights, no change was made.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
