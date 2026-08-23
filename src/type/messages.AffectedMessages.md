---
title: "Messages.AffectedMessages"
original: "https://core.telegram.org/type/messages.AffectedMessages"
section: ref
description: "Messages affected by changes"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.AffectedMessages","url":"/type/messages.AffectedMessages/"}]
layout: layout.njk
---

# Messages.AffectedMessages

Messages affected by changes

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;

---functions---

messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
messages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;

channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedMessages">messages.affectedMessages</a></td><td>Events affected by operation</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.readHistory">messages.readHistory</a></td><td>Marks message history as read.</td></tr><tr><td><a href="/method/messages.deleteMessages">messages.deleteMessages</a></td><td>Deletes messages by their identifiers.</td></tr><tr><td><a href="/method/messages.readMessageContents">messages.readMessageContents</a></td><td>Notifies the sender about the recipient having listened a voice message or watched a video, emitting an <a href="/constructor/updateReadMessagesContents">updateReadMessagesContents</a>.</td></tr><tr><td><a href="/method/channels.deleteMessages">channels.deleteMessages</a></td><td>Delete messages in a <a href="/api/channel">channel/supergroup</a></td></tr></tbody></table>
