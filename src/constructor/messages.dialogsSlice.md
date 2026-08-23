---
title: "messages.dialogsSlice"
original: "https://core.telegram.org/constructor/messages.dialogsSlice"
section: ref
description: "Incomplete list of dialogs with messages and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.dialogsSlice","url":"/constructor/messages.dialogsSlice/"}]
layout: layout.njk
---

# messages.dialogsSlice

Incomplete list of dialogs with messages and auxiliary data.

```
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of dialogs</td></tr><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Dialog">Dialog</a>&gt;</td><td>List of dialogs</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>List of last messages from dialogs</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>List of chats mentioned in dialogs</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>List of users mentioned in messages and chats</td></tr></tbody></table>

### Type

[messages.Dialogs](/type/messages.Dialogs/)
