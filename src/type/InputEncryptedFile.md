---
title: "InputEncryptedFile"
original: "https://core.telegram.org/type/InputEncryptedFile"
section: ref
description: "Object sets encrypted file for attachment"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputEncryptedFile","url":"/type/InputEncryptedFile/"}]
layout: layout.njk
---

# InputEncryptedFile

Object sets encrypted file for attachment

```
inputEncryptedFileEmpty#1837c364 = InputEncryptedFile;
inputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;
inputEncryptedFile#5a17b5e5 id:long access_hash:long = InputEncryptedFile;
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputEncryptedFileEmpty">inputEncryptedFileEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/inputEncryptedFileUploaded">inputEncryptedFileUploaded</a></td><td>Sets new encrypted file saved by parts using upload.saveFilePart method.</td></tr><tr><td><a href="/constructor/inputEncryptedFile">inputEncryptedFile</a></td><td>Sets forwarded encrypted file for attachment.</td></tr><tr><td><a href="/constructor/inputEncryptedFileBigUploaded">inputEncryptedFileBigUploaded</a></td><td>Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method <a href="/method/upload.saveBigFilePart">upload.saveBigFilePart</a>.</td></tr></tbody></table>
