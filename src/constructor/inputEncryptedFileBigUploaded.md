---
title: "inputEncryptedFileBigUploaded"
original: "https://core.telegram.org/constructor/inputEncryptedFileBigUploaded"
section: ref
description: "Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method upload.saveBigFilePart."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEncryptedFileBigUploaded","url":"/constructor/inputEncryptedFileBigUploaded/"}]
layout: layout.njk
---

# inputEncryptedFileBigUploaded

Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

```
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Random file id, created by the client</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of saved parts</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>32-bit imprint of the key used to encrypt the file</td></tr></tbody></table>

### Type

[InputEncryptedFile](/type/InputEncryptedFile/)

### Related pages

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.
