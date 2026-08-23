---
title: "messages.updateDialogFiltersOrder"
original: "https://core.telegram.org/method/messages.updateDialogFiltersOrder"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.updateDialogFiltersOrder","url":"/method/messages.updateDialogFiltersOrder/"}]
layout: layout.njk
---

# messages.updateDialogFiltersOrder

Reorder [folders](/api/folders/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>New <a href="/api/folders">folder</a> order</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
