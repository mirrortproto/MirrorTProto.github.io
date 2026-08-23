---
title: "InputMessage"
original: "https://core.telegram.org/type/InputMessage"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputMessage","url":"/type/InputMessage/"}]
layout: layout.njk
---

# InputMessage

A message

```
inputMessageID#a676a322 id:int = InputMessage;
inputMessageReplyTo#bad88395 id:int = InputMessage;
inputMessagePinned#86872538 = InputMessage;
inputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputMessageID">inputMessageID</a></td><td>Message by ID</td></tr><tr><td><a href="/constructor/inputMessageReplyTo">inputMessageReplyTo</a></td><td>Message to which the specified message replies to</td></tr><tr><td><a href="/constructor/inputMessagePinned">inputMessagePinned</a></td><td>Pinned message</td></tr><tr><td><a href="/constructor/inputMessageCallbackQuery">inputMessageCallbackQuery</a></td><td>Used by bots for fetching information about the message that originated a callback query</td></tr></tbody></table>
