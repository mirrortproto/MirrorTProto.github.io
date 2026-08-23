---
title: "upload.getCdnFileHashes"
original: "https://core.telegram.org/method/upload.getCdnFileHashes"
section: ref
description: "Get SHA256 hashes for verifying downloaded CDN files"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getCdnFileHashes","url":"/method/upload.getCdnFileHashes/"}]
layout: layout.njk
---

# upload.getCdnFileHashes

Get SHA256 hashes for verifying downloaded [CDN](https://core.telegram.org/cdn) files

```
---functions---
upload.getCdnFileHashes#91dc3f31 file_token:bytes offset:long = Vector<FileHash>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>File</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Offset from which to start getting hashes</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>You can't call this method in a CDN DC.</td></tr><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>The master DC did not accept the <code>file_token</code> (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile.</td></tr><tr><td>400</td><td>RSA_DECRYPT_FAILED</td><td>Internal RSA decryption failed.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
