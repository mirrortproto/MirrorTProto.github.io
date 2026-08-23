---
title: "messages.sentEncryptedFile"
original: "https://core.telegram.org/constructor/messages.sentEncryptedFile"
section: ref
description: "Message with a file enclosure sent to a protected chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.sentEncryptedFile","url":"/constructor/messages.sentEncryptedFile/"}]
layout: layout.njk
---

# messages.sentEncryptedFile

Message with a file enclosure sent to a protected chat

```
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Sending date</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/EncryptedFile">EncryptedFile</a></td><td>Attached file</td></tr></tbody></table>

### Type

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)
