---
title: "channels.setMainProfileTab"
original: "https://core.telegram.org/method/channels.setMainProfileTab"
section: ref
description: "Changes the main profile tab of a channel, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.setMainProfileTab","url":"/method/channels.setMainProfileTab/"}]
layout: layout.njk
---

# channels.setMainProfileTab

Changes the main profile tab of a channel, see [here »](/api/profile/#tabs) for more info.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>The channel.</td></tr><tr><td><strong>tab</strong></td><td style="text-align: center;"><a href="/type/ProfileTab">ProfileTab</a></td><td>The tab to set as main tab.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
