---
title: "smsjobs.updateSettings"
original: "https://core.telegram.org/method/smsjobs.updateSettings"
section: ref
description: "Update SMS job settings (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.updateSettings","url":"/method/smsjobs.updateSettings/"}]
layout: layout.njk
---

# smsjobs.updateSettings

Update SMS job settings (official clients only).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.updateSettings#93fa0bf flags:# allow_international:flags.0?true = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Allow international numbers?</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>The current user hasn't joined the Peer-to-Peer Login Program.</td></tr></tbody></table>
