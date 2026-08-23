---
title: "channels.setDiscussionGroup"
original: "https://core.telegram.org/method/channels.setDiscussionGroup"
section: ref
description: "Associate a group to a channel as discussion group for that channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.setDiscussionGroup","url":"/method/channels.setDiscussionGroup/"}]
layout: layout.njk
---

# channels.setDiscussionGroup

Associate a group to a channel as [discussion group](/api/discussion/) for that channel

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Channel</td></tr><tr><td><strong>group</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/discussion">Discussion group</a> to associate to the channel</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BROADCAST_ID_INVALID</td><td>Broadcast ID invalid.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>LINK_NOT_MODIFIED</td><td>Discussion link not modified.</td></tr><tr><td>400</td><td>MEGAGROUP_ID_INVALID</td><td>Invalid supergroup ID.</td></tr><tr><td>400</td><td>MEGAGROUP_PREHISTORY_HIDDEN</td><td>Group with hidden history for new members can't be set as discussion groups.</td></tr></tbody></table>

### Related pages

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
