---
title: "messages.savedDialogs"
original: "https://core.telegram.org/constructor/messages.savedDialogs"
section: ref
description: "Represents some saved message dialogs »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.savedDialogs","url":"/constructor/messages.savedDialogs/"}]
layout: layout.njk
---

# messages.savedDialogs

Represents some [saved message dialogs »](/api/saved-messages/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SavedDialog">SavedDialog</a>&gt;</td><td><a href="/api/saved-messages">Saved message dialogs »</a>.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>List of last messages from each saved dialog</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
