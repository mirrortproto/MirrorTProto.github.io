---
title: "messages.deletePhoneCallHistory"
original: "https://core.telegram.org/method/messages.deletePhoneCallHistory"
section: ref
description: "Delete the entire phone call history."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deletePhoneCallHistory","url":"/method/messages.deletePhoneCallHistory/"}]
layout: layout.njk
---

# messages.deletePhoneCallHistory

Delete the entire phone call history.

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;
---functions---
messages.deletePhoneCallHistory#f9cbe409 flags:# revoke:flags.0?true = messages.AffectedFoundMessages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to remove phone call history for participants as well</td></tr></tbody></table>

### Result

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

### Only users can use this method
