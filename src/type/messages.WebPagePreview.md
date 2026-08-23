---
title: "messages.WebPagePreview"
original: "https://core.telegram.org/type/messages.WebPagePreview"
section: ref
description: "Represents a webpage preview."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.WebPagePreview","url":"/type/messages.WebPagePreview/"}]
layout: layout.njk
---

# messages.WebPagePreview

Represents a webpage preview.

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;

---functions---

messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.webPagePreview">messages.webPagePreview</a></td><td>Represents a webpage preview.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getWebPagePreview">messages.getWebPagePreview</a></td><td>Get preview of webpage</td></tr></tbody></table>
