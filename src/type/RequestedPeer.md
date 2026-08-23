---
title: "RequestedPeer"
original: "https://core.telegram.org/type/RequestedPeer"
section: ref
description: "Info about a peer, shared by a user with the currently logged in bot using messages.sendBotRequestedPeer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RequestedPeer","url":"/type/RequestedPeer/"}]
layout: layout.njk
---

# RequestedPeer

Info about a peer, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

```
requestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChat#7307544f flags:# chat_id:long title:flags.0?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/requestedPeerUser">requestedPeerUser</a></td><td>Info about a user, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen user, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChat">requestedPeerChat</a></td><td>Info about a <a href="/api/channel">chat</a>, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen chat, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChannel">requestedPeerChannel</a></td><td>Info about a <a href="/api/channel">channel/supergroup</a>, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen channel/supergroup, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a>.</td></tr></tbody></table>

### Related pages

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.
