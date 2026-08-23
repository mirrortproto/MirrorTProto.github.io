---
title: "chatlists.checkChatlistInvite"
original: "https://core.telegram.org/method/chatlists.checkChatlistInvite"
section: ref
description: "Obtain information about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.checkChatlistInvite","url":"/method/chatlists.checkChatlistInvite/"}]
layout: layout.njk
---

# chatlists.checkChatlistInvite

Obtain information about a [chat folder deep link »](/api/links/#chat-folder-links).

```
chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
---functions---
chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>slug</code> obtained from the <a href="/api/links#chat-folder-links">chat folder deep link »</a></td></tr></tbody></table>

### Result

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>The specified invite slug is empty.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>The specified chat folder link has expired.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
