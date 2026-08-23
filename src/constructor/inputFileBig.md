---
title: "inputFileBig"
original: "https://core.telegram.org/constructor/inputFileBig"
section: ref
description: "Assigns a big file (over 10 MB in size), saved in part using the method upload.saveBigFilePart."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputFileBig","url":"/constructor/inputFileBig/"}]
layout: layout.njk
---

# inputFileBig

Assigns a big file (over 10 MB in size), saved in part using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

```
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Random file id, created by the client</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of parts saved</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Full file name</td></tr></tbody></table>

### Type

[InputFile](/type/InputFile/)

### Related pages

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.
