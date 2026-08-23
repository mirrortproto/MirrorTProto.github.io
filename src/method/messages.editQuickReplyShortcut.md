---
title: "messages.editQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.editQuickReplyShortcut"
section: ref
description: "Rename a quick reply shortcut."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editQuickReplyShortcut","url":"/method/messages.editQuickReplyShortcut/"}]
layout: layout.njk
---

# messages.editQuickReplyShortcut

Rename a [quick reply shortcut](/api/business/#quick-reply-shortcuts).  
This will emit an [updateQuickReplies](/constructor/updateQuickReplies/) update to other logged-in sessions.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editQuickReplyShortcut#5c003cef shortcut_id:int shortcut:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/business#quick-reply-shortcuts">Shortcut ID</a>.</td></tr><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>New shortcut name.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>SHORTCUT_INVALID</td><td>The specified shortcut is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Info about or the order of [quick reply shortcuts »](/api/business/#quick-reply-shortcuts) was changed.
