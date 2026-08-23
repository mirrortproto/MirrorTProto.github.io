---
title: "messages.webPage"
original: "https://core.telegram.org/constructor/messages.webPage"
section: ref
description: "Represents an Instant View webpage."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.webPage","url":"/constructor/messages.webPage/"}]
layout: layout.njk
---

# messages.webPage

Represents an Instant View webpage.

```
messages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage">WebPage</a></td><td>The instant view webpage.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Chats mentioned in the webpage.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Users mentioned in the webpage.</td></tr></tbody></table>

### Type

[messages.WebPage](/type/messages.WebPage/)
