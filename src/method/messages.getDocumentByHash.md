---
title: "messages.getDocumentByHash"
original: "https://core.telegram.org/method/messages.getDocumentByHash"
section: ref
description: "Get a document by its SHA256 hash, mainly used for gifs"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDocumentByHash","url":"/method/messages.getDocumentByHash/"}]
layout: layout.njk
---

# messages.getDocumentByHash

Get a document by its SHA256 hash, mainly used for gifs

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sha256</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>SHA256 of file</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Size of the file in bytes</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Mime type</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SHA256_HASH_INVALID</td><td>The provided SHA256 hash is invalid.</td></tr></tbody></table>
