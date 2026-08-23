---
title: "EncryptedMessage"
original: "https://core.telegram.org/type/EncryptedMessage"
section: ref
description: "Object contains encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedMessage","url":"/type/EncryptedMessage/"}]
layout: layout.njk
---

# EncryptedMessage

Object contains encrypted message.

```
encryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;
encryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedMessage">encryptedMessage</a></td><td>Encrypted message.</td></tr><tr><td><a href="/constructor/encryptedMessageService">encryptedMessageService</a></td><td>Encrypted service message</td></tr></tbody></table>
