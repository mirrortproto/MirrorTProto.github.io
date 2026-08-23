---
title: "decryptedMessageActionCommitKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionCommitKey"
section: ref
description: "Commit new key, see rekeying process"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionCommitKey","url":"/constructor/decryptedMessageActionCommitKey/"}]
layout: layout.njk
---

# decryptedMessageActionCommitKey

Commit new key, see [rekeying process](/api/end-to-end/pfs/)

```
===20===
decryptedMessageActionCommitKey#ec2e0b9b exchange_id:long key_fingerprint:long = DecryptedMessageAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Exchange ID, see <a href="/api/end-to-end/pfs">rekeying process</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Key fingerprint, see <a href="/api/end-to-end/pfs">rekeying process</a></td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Related pages

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy in secret chats.
