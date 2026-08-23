---
title: "messages.deleteQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.deleteQuickReplyShortcut"
section: ref
description: "Completely delete a quick reply shortcut."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteQuickReplyShortcut","url":"/method/messages.deleteQuickReplyShortcut/"}]
layout: layout.njk
---

# messages.deleteQuickReplyShortcut

Completely delete a [quick reply shortcut](/api/business/#quick-reply-shortcuts).  
This will also emit an [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) update to other logged-in sessions (and _no_ [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcuts are also deleted by this method).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteQuickReplyShortcut#3cc04740 shortcut_id:int = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/business#quick-reply-shortcuts">Shortcut ID</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SHORTCUT_INVALID</td><td>The specified shortcut is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/)

A [quick reply shortcut »](/api/business/#quick-reply-shortcuts) was deleted. This will **not** emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

One or more messages in a [quick reply shortcut »](/api/business/#quick-reply-shortcuts) were deleted.
