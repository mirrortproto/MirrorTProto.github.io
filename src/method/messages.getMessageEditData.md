---
title: "messages.getMessageEditData"
original: "https://core.telegram.org/method/messages.getMessageEditData"
section: ref
description: "Find out if a media message's caption can be edited"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getMessageEditData","url":"/method/messages.getMessageEditData/"}]
layout: layout.njk
---

# messages.getMessageEditData

Find out if a media message's caption can be edited

```
messages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;
---functions---
messages.getMessageEditData#fda68d36 peer:InputPeer id:int = messages.MessageEditData;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the media was sent</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of message</td></tr></tbody></table>

### Result

[messages.MessageEditData](/type/messages.MessageEditData/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>403</td><td>MESSAGE_AUTHOR_REQUIRED</td><td>Message author required.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
