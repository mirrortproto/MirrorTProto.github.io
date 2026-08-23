---
title: "account.deleteBusinessChatLink"
original: "https://core.telegram.org/method/account.deleteBusinessChatLink"
section: ref
description: "Delete a business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.deleteBusinessChatLink","url":"/method/account.deleteBusinessChatLink/"}]
layout: layout.njk
---

# account.deleteBusinessChatLink

Delete a [business chat deep link »](/api/business/#business-chat-links).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteBusinessChatLink#60073674 slug:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Slug of the link, obtained as specified <a href="/api/links#business-chat-links">here »</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHATLINK_SLUG_EMPTY</td><td>The specified slug is empty.</td></tr><tr><td>400</td><td>CHATLINK_SLUG_EXPIRED</td><td>The specified <a href="/api/business#business-chat-links">business chat link</a> has expired.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
