---
title: "updateDeleteQuickReplyMessages"
original: "https://core.telegram.org/constructor/updateDeleteQuickReplyMessages"
section: ref
description: "One or more messages in a quick reply shortcut » were deleted."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteQuickReplyMessages","url":"/constructor/updateDeleteQuickReplyMessages/"}]
layout: layout.njk
---

# updateDeleteQuickReplyMessages

One or more messages in a [quick reply shortcut »](/api/business/#quick-reply-shortcuts) were deleted.

```
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Quick reply shortcut ID.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>IDs of the deleted messages.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
