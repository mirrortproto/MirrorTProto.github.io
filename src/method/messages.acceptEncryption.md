---
title: "messages.acceptEncryption"
original: "https://core.telegram.org/method/messages.acceptEncryption"
section: ref
description: "Confirms creation of a secret chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.acceptEncryption","url":"/method/messages.acceptEncryption/"}]
layout: layout.njk
---

# messages.acceptEncryption

Confirms creation of a secret chat

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><code>B = g ^ b mod p</code>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>64-bit fingerprint of the received key</td></tr></tbody></table>

### Result

[EncryptedChat](/type/EncryptedChat/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_ACCEPTED</td><td>Secret chat already accepted.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_DECLINED</td><td>The secret chat was already declined.</td></tr></tbody></table>
