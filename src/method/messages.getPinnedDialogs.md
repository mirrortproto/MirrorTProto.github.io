---
title: "messages.getPinnedDialogs"
original: "https://core.telegram.org/method/messages.getPinnedDialogs"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getPinnedDialogs","url":"/method/messages.getPinnedDialogs/"}]
layout: layout.njk
---

# messages.getPinnedDialogs

Get pinned dialogs

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Peer folder ID, for more info click here</a></td></tr></tbody></table>

### Result

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FOLDER_ID_INVALID</td><td>Invalid folder ID.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
