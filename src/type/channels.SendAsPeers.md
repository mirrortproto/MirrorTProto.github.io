---
title: "channels.SendAsPeers"
original: "https://core.telegram.org/type/channels.SendAsPeers"
section: ref
description: "A list of peers that can be used to send messages in a specific group"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.SendAsPeers","url":"/type/channels.SendAsPeers/"}]
layout: layout.njk
---

# channels.SendAsPeers

A list of peers that can be used to send messages in a specific group

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;

---functions---

channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.sendAsPeers">channels.sendAsPeers</a></td><td>A list of peers that can be used to send messages in a specific group</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getSendAs">channels.getSendAs</a></td><td>Obtains a list of peers that can be displayed as the sender in a specific context. With <code>for_live_stories</code>, returns peers that may author <a href="/api/group-calls#in-call-messages">live story in-call messages »</a>.</td></tr></tbody></table>
