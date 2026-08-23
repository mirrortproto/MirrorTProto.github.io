---
title: "ExportedChatlistInvite"
original: "https://core.telegram.org/type/ExportedChatlistInvite"
section: ref
description: "An exported chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedChatlistInvite","url":"/type/ExportedChatlistInvite/"}]
layout: layout.njk
---

# ExportedChatlistInvite

An exported [chat folder deep link »](/api/links/#chat-folder-links).

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;

---functions---

chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedChatlistInvite">exportedChatlistInvite</a></td><td>Exported <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.editExportedInvite">chatlists.editExportedInvite</a></td><td>Edit a <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
