---
title: "messages.toggleDialogPin"
original: "https://core.telegram.org/method/messages.toggleDialogPin"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.toggleDialogPin","url":"/method/messages.toggleDialogPin/"}]
layout: layout.njk
---

# messages.toggleDialogPin

Pin/unpin a dialog

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleDialogPin#a731e257 flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to pin or unpin the dialog</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputDialogPeer">InputDialogPeer</a></td><td>The dialog to pin</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_HISTORY_EMPTY</td><td>You can't pin an empty chat with a user.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PINNED_DIALOGS_TOO_MUCH</td><td>Too many pinned dialogs.</td></tr></tbody></table>
