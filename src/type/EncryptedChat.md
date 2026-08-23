---
title: "EncryptedChat"
original: "https://core.telegram.org/type/EncryptedChat"
section: ref
description: "Object contains info on an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedChat","url":"/type/EncryptedChat/"}]
layout: layout.njk
---

# EncryptedChat

Object contains info on an encrypted chat.

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;

---functions---

messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedChatEmpty">encryptedChatEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/encryptedChatWaiting">encryptedChatWaiting</a></td><td>Chat waiting for approval of second participant.</td></tr><tr><td><a href="/constructor/encryptedChatRequested">encryptedChatRequested</a></td><td>Request to create an encrypted chat.</td></tr><tr><td><a href="/constructor/encryptedChat">encryptedChat</a></td><td>Encrypted chat</td></tr><tr><td><a href="/constructor/encryptedChatDiscarded">encryptedChatDiscarded</a></td><td>Discarded or deleted chat.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.requestEncryption">messages.requestEncryption</a></td><td>Sends a request to start a secret chat to the user.</td></tr><tr><td><a href="/method/messages.acceptEncryption">messages.acceptEncryption</a></td><td>Confirms creation of a secret chat</td></tr></tbody></table>
