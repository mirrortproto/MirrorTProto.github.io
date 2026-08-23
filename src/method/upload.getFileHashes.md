---
title: "upload.getFileHashes"
original: "https://core.telegram.org/method/upload.getFileHashes"
section: ref
description: "Get SHA256 hashes for verifying downloaded files"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getFileHashes","url":"/method/upload.getFileHashes/"}]
layout: layout.njk
---

# upload.getFileHashes

Get SHA256 hashes for verifying downloaded files

```
---functions---
upload.getFileHashes#9156982a location:InputFileLocation offset:long = Vector<FileHash>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputFileLocation">InputFileLocation</a></td><td>File</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Offset from which to get file hashes</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr></tbody></table>
