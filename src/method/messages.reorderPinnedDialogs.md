---
title: "messages.reorderPinnedDialogs"
original: "https://core.telegram.org/method/messages.reorderPinnedDialogs"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reorderPinnedDialogs","url":"/method/messages.reorderPinnedDialogs/"}]
layout: layout.njk
---

# messages.reorderPinnedDialogs

Reorder pinned dialogs

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedDialogs#3b1adf37 flags:# force:flags.0?true folder_id:int order:Vector<InputDialogPeer> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, dialogs pinned server-side but not present in the <code>order</code> field will be unpinned.</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDialogPeer">InputDialogPeer</a>&gt;</td><td>New dialog order</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
