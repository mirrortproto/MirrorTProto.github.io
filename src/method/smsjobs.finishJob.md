---
title: "smsjobs.finishJob"
original: "https://core.telegram.org/method/smsjobs.finishJob"
section: ref
description: "Finish an SMS job (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.finishJob","url":"/method/smsjobs.finishJob/"}]
layout: layout.njk
---

# smsjobs.finishJob

Finish an SMS job (official clients only).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.finishJob#4f1ebf24 flags:# job_id:string error:flags.0?string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>job_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Job ID.</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>If failed, the error.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SMSJOB_ID_INVALID</td><td>The specified job ID is invalid.</td></tr></tbody></table>
