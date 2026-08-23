---
title: "inputDocument"
original: "https://core.telegram.org/constructor/inputDocument"
section: ref
description: "Defines a document for subsequent interaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputDocument","url":"/constructor/inputDocument/"}]
layout: layout.njk
---

# inputDocument

Defines a document for subsequent interaction.

```
inputDocument#1abfb575 id:long access_hash:long file_reference:bytes = InputDocument;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Document ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><strong>access_hash</strong> parameter from the <a href="/constructor/document">document</a> constructor</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/file-references">File reference</a></td></tr></tbody></table>

### Type

[InputDocument](/type/InputDocument/)

### Related pages

#### [document](/constructor/document/)

Document

#### [File references](/api/file-references/)

How to handle file references.
