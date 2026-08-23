---
title: "messages.requestEncryption"
original: "https://core.telegram.org/method/messages.requestEncryption"
section: ref
description: "Sends a request to start a secret chat to the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestEncryption","url":"/method/messages.requestEncryption/"}]
layout: layout.njk
---

# messages.requestEncryption

Sends a request to start a secret chat to the user.

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>User ID</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Unique client request ID required to prevent resending. This also doubles as the chat ID. See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><code>A = g ^ a mod p</code>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr></tbody></table>

### Result

[EncryptedChat](/type/EncryptedChat/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DH_G_A_INVALID</td><td>g_a invalid.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
