---
title: "Upload.WebFile"
original: "https://core.telegram.org/type/upload.WebFile"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Upload.WebFile","url":"/type/upload.WebFile/"}]
layout: layout.njk
---

# Upload.WebFile

Remote file

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;

---functions---

upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.webFile">upload.webFile</a></td><td>Represents a chunk of an <a href="/api/files">HTTP webfile</a> downloaded through telegram's secure MTProto servers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getWebFile">upload.getWebFile</a></td><td>Returns content of a web file, by proxying the request through telegram, see the <a href="/api/files#downloading-webfiles">webfile docs for more info</a>.<br><br><strong>Note</strong>: the query must be sent to the DC specified in the <code>webfile_dc_id</code> <a href="/api/config#mtproto-configuration">MTProto configuration field</a>.</td></tr></tbody></table>
