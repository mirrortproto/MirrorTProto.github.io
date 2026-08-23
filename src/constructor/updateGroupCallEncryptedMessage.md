---
title: "updateGroupCallEncryptedMessage"
original: "https://core.telegram.org/constructor/updateGroupCallEncryptedMessage"
section: ref
description: "A new E2E-encrypted message or emoji reaction was received in a conference call, see here » for the decryption process."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCallEncryptedMessage","url":"/constructor/updateGroupCallEncryptedMessage/"}]
layout: layout.njk
---

# updateGroupCallEncryptedMessage

A new E2E-encrypted message or emoji reaction was received in a conference call, see [here »](/api/end-to-end/group-calls/#receiving-and-decrypting-a-message) for the decryption process.

```
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Conference call that received the encrypted message</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Sender whose blockchain public key must be used to verify the encrypted packet</td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Complete encrypted packet</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
