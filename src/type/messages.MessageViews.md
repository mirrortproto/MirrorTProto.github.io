---
title: "messages.MessageViews"
original: "https://core.telegram.org/type/messages.MessageViews"
section: ref
description: "View, forward counter + info about replies"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.MessageViews","url":"/type/messages.MessageViews/"}]
layout: layout.njk
---

# messages.MessageViews

View, forward counter + info about replies

```
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;

---functions---

messages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageViews">messages.messageViews</a></td><td>View, forward counter + info about replies</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessagesViews">messages.getMessagesViews</a></td><td>Get and increase the view counter of a message sent or forwarded from a <a href="/api/channel">channel</a></td></tr></tbody></table>
