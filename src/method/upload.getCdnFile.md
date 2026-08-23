---
title: "upload.getCdnFile"
original: "https://core.telegram.org/method/upload.getCdnFile"
section: ref
description: "How client apps download popular public files from secondary CDN data centers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getCdnFile","url":"/method/upload.getCdnFile/"}]
layout: layout.njk
---

# upload.getCdnFile

Download a [CDN](https://core.telegram.org/cdn) file.

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;
---functions---
upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>File token</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Offset of chunk to download</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Length of chunk to download</td></tr></tbody></table>

### Result

[upload.CdnFile](/type/upload.CdnFile/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>The master DC did not accept the <code>file_token</code> (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile.</td></tr><tr><td>404</td><td>METHOD_INVALID</td><td>The specified method is invalid.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
