---
title: "Document"
original: "https://core.telegram.org/type/Document"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Document","url":"/type/Document/"}]
layout: layout.njk
---

# Document

A document.

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

---functions---

messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;

account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/documentEmpty">documentEmpty</a></td><td>Empty constructor, document doesn't exist.</td></tr><tr><td><a href="/constructor/document">document</a></td><td>Document</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.uploadTheme">account.uploadTheme</a></td><td>Upload theme</td></tr><tr><td><a href="/method/account.uploadRingtone">account.uploadRingtone</a></td><td>Upload notification sound, use <a href="/method/account.saveRingtone">account.saveRingtone</a> to convert it and add it to the list of saved notification sounds.</td></tr><tr><td><a href="/method/messages.getDocumentByHash">messages.getDocumentByHash</a></td><td>Get a document by its SHA256 hash, mainly used for gifs</td></tr></tbody></table>
