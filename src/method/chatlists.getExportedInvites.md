---
title: "chatlists.getExportedInvites"
original: "https://core.telegram.org/method/chatlists.getExportedInvites"
section: ref
description: "List all chat folder deep links » associated to a folder"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.getExportedInvites","url":"/method/chatlists.getExportedInvites/"}]
layout: layout.njk
---

# chatlists.getExportedInvites

List all [chat folder deep links »](/api/links/#chat-folder-links) associated to a folder

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;
---functions---
chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>The folder</td></tr></tbody></table>

### Result

[chatlists.ExportedInvites](/type/chatlists.ExportedInvites/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
