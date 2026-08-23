---
title: "messages.reorderPinnedSavedDialogs"
original: "https://core.telegram.org/method/messages.reorderPinnedSavedDialogs"
section: ref
description: "Reorder pinned saved message dialogs »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reorderPinnedSavedDialogs","url":"/method/messages.reorderPinnedSavedDialogs/"}]
layout: layout.njk
---

# messages.reorderPinnedSavedDialogs

Reorder pinned [saved message dialogs »](/api/saved-messages/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedSavedDialogs#8b716587 flags:# force:flags.0?true order:Vector<InputDialogPeer> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, dialogs pinned server-side but not present in the <code>order</code> field will be unpinned.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDialogPeer">InputDialogPeer</a>&gt;</td><td>New dialog order</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
