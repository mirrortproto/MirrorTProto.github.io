---
title: "DecryptedMessageLayer"
original: "https://core.telegram.org/type/DecryptedMessageLayer"
section: ref
description: "Object describes encrypted message content in relation to the required layer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DecryptedMessageLayer","url":"/type/DecryptedMessageLayer/"}]
layout: layout.njk
---

# DecryptedMessageLayer

Object describes encrypted message content in relation to the required layer.

```
===17===
decryptedMessageLayer#1be31789 random_bytes:bytes layer:int in_seq_no:int out_seq_no:int message:DecryptedMessage = DecryptedMessageLayer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageLayer">decryptedMessageLayer</a></td><td>Sets the layer number for the contents of an encrypted message.</td></tr></tbody></table>
