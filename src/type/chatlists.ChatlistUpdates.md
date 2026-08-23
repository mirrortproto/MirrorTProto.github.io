---
title: "chatlists.ChatlistUpdates"
original: "https://core.telegram.org/type/chatlists.ChatlistUpdates"
section: ref
description: "Updated info about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.ChatlistUpdates","url":"/type/chatlists.ChatlistUpdates/"}]
layout: layout.njk
---

# chatlists.ChatlistUpdates

Updated info about a [chat folder deep link »](/api/links/#chat-folder-links).

```
chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;

---functions---

chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.chatlistUpdates">chatlists.chatlistUpdates</a></td><td>Updated information about a <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/chatlists.getChatlistUpdates">chatlists.getChatlistUpdates</a></td><td>Fetch new chats associated with an imported <a href="/api/links#chat-folder-links">chat folder deep link »</a>. Must be invoked at most every <code>chatlist_update_period</code> seconds (as per the related <a href="/api/config#chatlist-update-period">client configuration parameter »</a>).</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
