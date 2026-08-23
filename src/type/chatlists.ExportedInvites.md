---
title: "chatlists.ExportedInvites"
original: "https://core.telegram.org/type/chatlists.ExportedInvites"
section: ref
description: "A list of exported chat folder deep links »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ExportedInvites","url":"/type/chatlists.ExportedInvites/"}]
layout: layout.njk
---

# chatlists.ExportedInvites

A list of exported [chat folder deep links »](/api/links/#chat-folder-links).

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;

---functions---

chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.exportedInvites">chatlists.exportedInvites</a></td><td>Info about multiple <a href="/api/links#chat-folder-links">chat folder deep links »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.getExportedInvites">chatlists.getExportedInvites</a></td><td>List all <a href="/api/links#chat-folder-links">chat folder deep links »</a> associated to a folder</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
