---
title: "updateEncryption"
original: "https://core.telegram.org/constructor/updateEncryption"
section: ref
description: "Change of state in an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateEncryption","url":"/constructor/updateEncryption/"}]
layout: layout.njk
---

# updateEncryption

Change of state in an encrypted chat.

```
updateEncryption#b4a2e88d chat:EncryptedChat date:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat</strong></td><td style="text-align: center;"><a href="/type/EncryptedChat">EncryptedChat</a></td><td>Encrypted chat</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Date of change</td></tr></tbody></table>

### Type

[Update](/type/Update/)
