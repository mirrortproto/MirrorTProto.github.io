---
title: "messages.webPagePreview"
original: "https://core.telegram.org/constructor/messages.webPagePreview"
section: ref
description: "Represents a webpage preview."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.webPagePreview","url":"/constructor/messages.webPagePreview/"}]
layout: layout.njk
---

# messages.webPagePreview

Represents a webpage preview.

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/MessageMedia">MessageMedia</a></td><td>The <a href="/constructor/messageMediaWebPage">messageMediaWebPage</a> or a <a href="/constructor/messageMediaEmpty">messageMediaEmpty</a> if there is no preview.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Chats mentioned in the <code>gift</code> field.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Users mentioned within the <code>media</code> object.</td></tr></tbody></table>

### Type

[messages.WebPagePreview](/type/messages.WebPagePreview/)

### Related pages

#### [messageMediaWebPage](/constructor/messageMediaWebPage/)

Preview of webpage

#### [messageMediaEmpty](/constructor/messageMediaEmpty/)

Empty constructor.
