---
title: "messages.uploadEncryptedFile"
original: "https://core.telegram.org/method/messages.uploadEncryptedFile"
section: ref
description: "Upload encrypted file and associate it to a secret chat (without actually sending it to the chat)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.uploadEncryptedFile","url":"/method/messages.uploadEncryptedFile/"}]
layout: layout.njk
---

# messages.uploadEncryptedFile

Upload encrypted file and associate it to a secret chat (without actually sending it to the chat).

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
---functions---
messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>The secret chat to associate the file to</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedFile">InputEncryptedFile</a></td><td>The file</td></tr></tbody></table>

### Result

[EncryptedFile](/type/EncryptedFile/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr></tbody></table>
