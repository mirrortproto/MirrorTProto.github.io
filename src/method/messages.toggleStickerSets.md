---
title: "messages.toggleStickerSets"
original: "https://core.telegram.org/method/messages.toggleStickerSets"
section: ref
description: "Apply changes to multiple stickersets"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.toggleStickerSets","url":"/method/messages.toggleStickerSets/"}]
layout: layout.njk
---

# messages.toggleStickerSets

Apply changes to multiple stickersets

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleStickerSets#b5052fea flags:# uninstall:flags.0?true archive:flags.1?true unarchive:flags.2?true stickersets:Vector<InputStickerSet> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>uninstall</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Uninstall the specified stickersets</td></tr><tr><td><strong>archive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Archive the specified stickersets</td></tr><tr><td><strong>unarchive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Unarchive the specified stickersets</td></tr><tr><td><strong>stickersets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputStickerSet">InputStickerSet</a>&gt;</td><td>Stickersets to act upon</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method
