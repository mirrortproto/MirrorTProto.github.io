---
title: "InputPeer"
original: "https://core.telegram.org/type/InputPeer"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPeer","url":"/type/InputPeer/"}]
layout: layout.njk
---

# InputPeer

Peer

```
inputPeerEmpty#7f3b18ea = InputPeer;
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#35a95cb9 chat_id:long = InputPeer;
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;
inputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;
inputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPeerEmpty">inputPeerEmpty</a></td><td>An empty constructor, no user or chat is defined.</td></tr><tr><td><a href="/constructor/inputPeerSelf">inputPeerSelf</a></td><td>Defines the current user.</td></tr><tr><td><a href="/constructor/inputPeerChat">inputPeerChat</a></td><td>Defines a chat for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerUser">inputPeerUser</a></td><td>Defines a user for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerChannel">inputPeerChannel</a></td><td>Defines a channel for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerUserFromMessage">inputPeerUserFromMessage</a></td><td>Defines a <a href="/api/min">min</a> user that was seen in a certain message of a certain chat.</td></tr><tr><td><a href="/constructor/inputPeerChannelFromMessage">inputPeerChannelFromMessage</a></td><td>Defines a <a href="/api/min">min</a> channel that was seen in a certain message of a certain chat.</td></tr></tbody></table>
