---
title: "account.reportProfilePhoto"
original: "https://core.telegram.org/method/account.reportProfilePhoto"
section: ref
description: "Report a profile photo of a dialog"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.reportProfilePhoto","url":"/method/account.reportProfilePhoto/"}]
layout: layout.njk
---

# account.reportProfilePhoto

Report a profile photo of a dialog

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reportProfilePhoto#fa8cc6f5 peer:InputPeer photo_id:InputPhoto reason:ReportReason message:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The dialog</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto">InputPhoto</a></td><td>Dialog photo ID</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/ReportReason">ReportReason</a></td><td>Report reason</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Comment for report moderation</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
