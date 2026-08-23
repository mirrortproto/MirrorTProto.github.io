---
title: "messages.deleteRevokedExportedChatInvites"
original: "https://core.telegram.org/method/messages.deleteRevokedExportedChatInvites"
section: ref
description: "Delete all revoked chat invites"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteRevokedExportedChatInvites","url":"/method/messages.deleteRevokedExportedChatInvites/"}]
layout: layout.njk
---

# messages.deleteRevokedExportedChatInvites

Delete all revoked chat invites

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Chat</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>ID of the admin that originally generated the revoked chat invites</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ADMIN_ID_INVALID</td><td>The specified admin ID is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
