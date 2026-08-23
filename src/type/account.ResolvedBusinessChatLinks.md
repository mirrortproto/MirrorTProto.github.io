---
title: "account.ResolvedBusinessChatLinks"
original: "https://core.telegram.org/type/account.ResolvedBusinessChatLinks"
section: ref
description: "Contains info about a single resolved business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.ResolvedBusinessChatLinks","url":"/type/account.ResolvedBusinessChatLinks/"}]
layout: layout.njk
---

# account.ResolvedBusinessChatLinks

Contains info about a single resolved [business chat deep link »](/api/business/#business-chat-links).

```
account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;

---functions---

account.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.resolvedBusinessChatLinks">account.resolvedBusinessChatLinks</a></td><td>Contains info about a single resolved <a href="/api/business#business-chat-links">business chat deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.resolveBusinessChatLink">account.resolveBusinessChatLink</a></td><td>Resolve a <a href="/api/business#business-chat-links">business chat deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
