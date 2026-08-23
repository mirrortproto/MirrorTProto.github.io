---
title: "Messages.PeerDialogs"
original: "https://core.telegram.org/type/messages.PeerDialogs"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.PeerDialogs","url":"/type/messages.PeerDialogs/"}]
layout: layout.njk
---

# Messages.PeerDialogs

List of dialogs

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;

---functions---

messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.peerDialogs">messages.peerDialogs</a></td><td>Dialog info of multiple peers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getPeerDialogs">messages.getPeerDialogs</a></td><td>Get dialog info of specified peers</td></tr><tr><td><a href="/method/messages.getPinnedDialogs">messages.getPinnedDialogs</a></td><td>Get pinned dialogs</td></tr></tbody></table>
