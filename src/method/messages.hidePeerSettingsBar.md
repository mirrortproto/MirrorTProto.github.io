---
title: "messages.hidePeerSettingsBar"
original: "https://core.telegram.org/method/messages.hidePeerSettingsBar"
section: ref
description: "Should be called after the user hides the report spam/add as contact bar of a new chat, effectively prevents the user from executing the actions specified in the action bar »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.hidePeerSettingsBar","url":"/method/messages.hidePeerSettingsBar/"}]
layout: layout.njk
---

# messages.hidePeerSettingsBar

Should be called after the user hides the [report spam/add as contact bar](/api/action-bar/) of a new chat, effectively prevents the user from executing the actions specified in the [action bar »](/api/action-bar/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Action bar](/api/action-bar/)

Sometimes, when interacting with Telegram users via private or secret chats, an action bar must be shown on top of the chat, offering convenient action buttons or notices regarding the user.
