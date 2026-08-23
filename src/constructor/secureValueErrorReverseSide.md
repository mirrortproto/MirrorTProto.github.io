---
title: "secureValueErrorReverseSide"
original: "https://core.telegram.org/constructor/secureValueErrorReverseSide"
section: ref
description: "Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValueErrorReverseSide","url":"/constructor/secureValueErrorReverseSide/"}]
layout: layout.njk
---

# secureValueErrorReverseSide

Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

```
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType">SecureValueType</a></td><td>One of <a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>File hash</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Error message</td></tr></tbody></table>

### Type

[SecureValueError](/type/SecureValueError/)

### Related pages

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card
