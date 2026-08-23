---
title: "SecureValueError"
original: "https://core.telegram.org/type/SecureValueError"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureValueError","url":"/type/SecureValueError/"}]
layout: layout.njk
---

# SecureValueError

Secure value error

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
secureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
secureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureValueErrorData">secureValueErrorData</a></td><td>Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.</td></tr><tr><td><a href="/constructor/secureValueErrorFrontSide">secureValueErrorFrontSide</a></td><td>Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.</td></tr><tr><td><a href="/constructor/secureValueErrorReverseSide">secureValueErrorReverseSide</a></td><td>Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.</td></tr><tr><td><a href="/constructor/secureValueErrorSelfie">secureValueErrorSelfie</a></td><td>Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.</td></tr><tr><td><a href="/constructor/secureValueErrorFile">secureValueErrorFile</a></td><td>Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.</td></tr><tr><td><a href="/constructor/secureValueErrorFiles">secureValueErrorFiles</a></td><td>Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.</td></tr><tr><td><a href="/constructor/secureValueError">secureValueError</a></td><td>Secure value error</td></tr><tr><td><a href="/constructor/secureValueErrorTranslationFile">secureValueErrorTranslationFile</a></td><td>Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.</td></tr><tr><td><a href="/constructor/secureValueErrorTranslationFiles">secureValueErrorTranslationFiles</a></td><td>Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes.</td></tr></tbody></table>
