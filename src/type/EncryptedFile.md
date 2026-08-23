---
title: "EncryptedFile"
original: "https://core.telegram.org/type/EncryptedFile"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedFile","url":"/type/EncryptedFile/"}]
layout: layout.njk
---

# EncryptedFile

Seta an encrypted file.

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;

---functions---

messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedFileEmpty">encryptedFileEmpty</a></td><td>Empty constructor, non-existing file.</td></tr><tr><td><a href="/constructor/encryptedFile">encryptedFile</a></td><td>Encrypted file.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.uploadEncryptedFile">messages.uploadEncryptedFile</a></td><td>Upload encrypted file and associate it to a secret chat (without actually sending it to the chat).</td></tr></tbody></table>
