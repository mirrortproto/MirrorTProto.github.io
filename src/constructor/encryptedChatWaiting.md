---
title: "encryptedChatWaiting"
original: "https://core.telegram.org/constructor/encryptedChatWaiting"
section: ref
description: "Chat waiting for approval of second participant."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedChatWaiting","url":"/constructor/encryptedChatWaiting/"}]
layout: layout.njk
---

# encryptedChatWaiting

Chat waiting for approval of second participant.

```
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Chat ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Checking sum depending on user ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Date of chat creation</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Chat creator ID</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>ID of second chat participant</td></tr></tbody></table>

### Type

[EncryptedChat](/type/EncryptedChat/)
