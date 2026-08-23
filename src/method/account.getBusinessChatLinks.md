---
title: "account.getBusinessChatLinks"
original: "https://core.telegram.org/method/account.getBusinessChatLinks"
section: ref
description: "List all created business chat deep links »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getBusinessChatLinks","url":"/method/account.getBusinessChatLinks/"}]
layout: layout.njk
---

# account.getBusinessChatLinks

List all created [business chat deep links »](/api/business/#business-chat-links).

```
account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;
---functions---
account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
```

### Parameters

This constructor does not require any parameters.

### Result

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
