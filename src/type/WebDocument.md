---
title: "WebDocument"
original: "https://core.telegram.org/type/WebDocument"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebDocument","url":"/type/WebDocument/"}]
layout: layout.njk
---

# WebDocument

Remote document

```
webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
webDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webDocument">webDocument</a></td><td>Remote document</td></tr><tr><td><a href="/constructor/webDocumentNoProxy">webDocumentNoProxy</a></td><td>Remote document that can be downloaded without <a href="/api/files">proxying through telegram</a></td></tr></tbody></table>
