---
title: "Messages.SentEncryptedMessage"
original: "https://core.telegram.org/type/messages.SentEncryptedMessage"
section: ref
description: "Contains info on message sent to an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.SentEncryptedMessage","url":"/type/messages.SentEncryptedMessage/"}]
layout: layout.njk
---

# Messages.SentEncryptedMessage

Contains info on message sent to an encrypted chat.

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;

---functions---

messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sentEncryptedMessage">messages.sentEncryptedMessage</a></td><td>Message without file attachments sent to an encrypted file.</td></tr><tr><td><a href="/constructor/messages.sentEncryptedFile">messages.sentEncryptedFile</a></td><td>Message with a file enclosure sent to a protected chat</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.sendEncrypted">messages.sendEncrypted</a></td><td>Sends a text message to a secret chat.</td></tr><tr><td><a href="/method/messages.sendEncryptedFile">messages.sendEncryptedFile</a></td><td>Sends a message with a file attachment to a secret chat</td></tr><tr><td><a href="/method/messages.sendEncryptedService">messages.sendEncryptedService</a></td><td>Sends a service message to a secret chat.</td></tr></tbody></table>
