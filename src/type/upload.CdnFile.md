---
title: "upload.CdnFile"
original: "https://core.telegram.org/type/upload.CdnFile"
section: ref
description: "Represents the download status of a CDN file"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.CdnFile","url":"/type/upload.CdnFile/"}]
layout: layout.njk
---

# upload.CdnFile

Represents the download status of a CDN file

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;

---functions---

upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.cdnFileReuploadNeeded">upload.cdnFileReuploadNeeded</a></td><td>The file was cleared from the temporary RAM cache of the <a href="/cdn">CDN</a> and has to be re-uploaded.</td></tr><tr><td><a href="/constructor/upload.cdnFile">upload.cdnFile</a></td><td>Represent a chunk of a <a href="/cdn">CDN</a> file.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getCdnFile">upload.getCdnFile</a></td><td>Download a <a href="/cdn">CDN</a> file.</td></tr></tbody></table>
