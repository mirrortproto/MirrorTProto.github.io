---
title: "upload.File"
original: "https://core.telegram.org/type/upload.File"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.File","url":"/type/upload.File/"}]
layout: layout.njk
---

# upload.File

Contains info on file.

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;

---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.file">upload.file</a></td><td>File content.</td></tr><tr><td><a href="/constructor/upload.fileCdnRedirect">upload.fileCdnRedirect</a></td><td>The file must be downloaded from a <a href="/cdn">CDN DC</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getFile">upload.getFile</a></td><td>Returns content of a whole file or its part.</td></tr></tbody></table>
