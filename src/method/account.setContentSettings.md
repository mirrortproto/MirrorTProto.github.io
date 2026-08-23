---
title: "account.setContentSettings"
original: "https://core.telegram.org/method/account.setContentSettings"
section: ref
description: "Set sensitive content settings (for viewing or hiding NSFW content)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setContentSettings","url":"/method/account.setContentSettings/"}]
layout: layout.njk
---

# account.setContentSettings

Set sensitive content settings (for viewing or hiding NSFW content)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setContentSettings#b574b16b flags:# sensitive_enabled:flags.0?true = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sensitive_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Enable NSFW content</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>SENSITIVE_CHANGE_FORBIDDEN</td><td>You can't change your sensitive content settings.</td></tr></tbody></table>
