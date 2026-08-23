---
title: "inputFolderPeer"
original: "https://core.telegram.org/constructor/inputFolderPeer"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputFolderPeer","url":"/constructor/inputFolderPeer/"}]
layout: layout.njk
---

# inputFolderPeer

Peer in a folder

```
inputFolderPeer#fbd2c296 peer:InputPeer folder_id:int = InputFolderPeer;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Peer folder ID, for more info click here</a></td></tr></tbody></table>

### Type

[InputFolderPeer](/type/InputFolderPeer/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
