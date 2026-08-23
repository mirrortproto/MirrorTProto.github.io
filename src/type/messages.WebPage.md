---
title: "Messages.WebPage"
original: "https://core.telegram.org/type/messages.WebPage"
section: ref
description: "Contains an instant view webpage."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.WebPage","url":"/type/messages.WebPage/"}]
layout: layout.njk
---

# Messages.WebPage

Contains an instant view webpage.

```
messages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;

---functions---

messages.getWebPage#8d9692a3 url:string hash:int = messages.WebPage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.webPage">messages.webPage</a></td><td>Represents an Instant View webpage.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getWebPage">messages.getWebPage</a></td><td>Get <a href="https://instantview.telegram.org">instant view</a> page</td></tr></tbody></table>
