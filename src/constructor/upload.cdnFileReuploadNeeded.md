---
title: "upload.cdnFileReuploadNeeded"
original: "https://core.telegram.org/constructor/upload.cdnFileReuploadNeeded"
section: ref
description: "The file was cleared from the temporary RAM cache of the CDN and has to be re-uploaded."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.cdnFileReuploadNeeded","url":"/constructor/upload.cdnFileReuploadNeeded/"}]
layout: layout.njk
---

# upload.cdnFileReuploadNeeded

The file was cleared from the temporary RAM cache of the [CDN](https://core.telegram.org/cdn) and has to be re-uploaded.

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>request_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Request token (see <a href="/cdn">CDN</a>)</td></tr></tbody></table>

### Type

[upload.CdnFile](/type/upload.CdnFile/)

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
