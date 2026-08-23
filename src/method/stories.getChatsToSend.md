---
title: "stories.getChatsToSend"
original: "https://core.telegram.org/method/stories.getChatsToSend"
section: ref
description: "Obtain a list of channels where the user can post stories"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getChatsToSend","url":"/method/stories.getChatsToSend/"}]
layout: layout.njk
---

# stories.getChatsToSend

Obtain a list of channels where the user can post [stories](/api/stories/)

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
stories.getChatsToSend#a56a8b60 = messages.Chats;
```

### Parameters

This constructor does not require any parameters.

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
