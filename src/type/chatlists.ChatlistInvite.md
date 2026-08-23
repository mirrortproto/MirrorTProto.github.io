---
title: "chatlists.ChatlistInvite"
original: "https://core.telegram.org/type/chatlists.ChatlistInvite"
section: ref
description: "Info about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ChatlistInvite","url":"/type/chatlists.ChatlistInvite/"}]
layout: layout.njk
---

# chatlists.ChatlistInvite

Info about a [chat folder deep link »](/api/links/#chat-folder-links).

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;

---functions---

chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistInviteAlready">chatlists.chatlistInviteAlready</a></td><td>Updated info about a <a href="/api/links#chat-folder-links">chat folder deep link »</a> we already imported.</td></tr><tr><td><a href="/constructor/chatlists.chatlistInvite">chatlists.chatlistInvite</a></td><td>Info about a <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.checkChatlistInvite">chatlists.checkChatlistInvite</a></td><td>Obtain information about a <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
