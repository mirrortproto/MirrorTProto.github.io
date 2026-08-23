---
title: "inputSecureFileLocation"
original: "https://core.telegram.org/constructor/inputSecureFileLocation"
section: ref
description: "Location of encrypted telegram passport file."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSecureFileLocation","url":"/constructor/inputSecureFileLocation/"}]
layout: layout.njk
---

# inputSecureFileLocation

Location of encrypted telegram [passport](https://core.telegram.org/passport) file.

```
inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>File ID, <strong>id</strong> parameter value from <a href="/constructor/secureFile">secureFile</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Checksum, <strong>access_hash</strong> parameter value from <a href="/constructor/secureFile">secureFile</a></td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [secureFile](/constructor/secureFile/)

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
