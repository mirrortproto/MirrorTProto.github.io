---
title: "account.saveAutoDownloadSettings"
original: "https://core.telegram.org/method/account.saveAutoDownloadSettings"
section: ref
description: "Change media autodownload settings"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveAutoDownloadSettings","url":"/method/account.saveAutoDownloadSettings/"}]
layout: layout.njk
---

# account.saveAutoDownloadSettings

Change media autodownload settings

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveAutoDownloadSettings#76f36233 flags:# low:flags.0?true high:flags.1?true settings:AutoDownloadSettings = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>low</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to save media in the low data usage preset</td></tr><tr><td><strong>high</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether to save media in the high data usage preset</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/AutoDownloadSettings">AutoDownloadSettings</a></td><td>Media autodownload settings</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method
