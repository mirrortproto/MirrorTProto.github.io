---
title: "messages.getQuickReplies"
original: "https://core.telegram.org/method/messages.getQuickReplies"
section: ref
description: "Fetch basic info about all existing quick reply shortcuts."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getQuickReplies","url":"/method/messages.getQuickReplies/"}]
layout: layout.njk
---

# messages.getQuickReplies

Fetch basic info about all existing [quick reply shortcuts](/api/business/#quick-reply-shortcuts).

```
messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;
---functions---
messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Hash for pagination, generated as specified <a href="/api/business#quick-reply-shortcuts">here »</a> (not the usual algorithm used for hash generation.)</td></tr></tbody></table>

### Result

[messages.QuickReplies](/type/messages.QuickReplies/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
