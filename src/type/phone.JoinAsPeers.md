---
title: "phone.JoinAsPeers"
original: "https://core.telegram.org/type/phone.JoinAsPeers"
section: ref
description: "A list of peers that can be used to join a group call, presenting yourself as a specific user/channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.JoinAsPeers","url":"/type/phone.JoinAsPeers/"}]
layout: layout.njk
---

# phone.JoinAsPeers

A list of peers that can be used to join a group call, presenting yourself as a specific user/channel.

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;

---functions---

phone.getGroupCallJoinAs#ef7c213a peer:InputPeer = phone.JoinAsPeers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.joinAsPeers">phone.joinAsPeers</a></td><td>Contains the peers that may be used to join a video chat/livestream, see <a href="/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels">joining on behalf of owned channels »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallJoinAs">phone.getGroupCallJoinAs</a></td><td>Get a list of peers that can be used to join a <a href="/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels">video chat or livestream »</a>, presenting yourself as a specific user/channel.<br><br>This method cannot be used for live stories or conference calls. To comment or react in a live story as another peer, use <a href="/method/channels.getSendAs">channels.getSendAs</a> with <code>for_live_stories</code> set and pass one of the returned peers to <a href="/method/phone.sendGroupCallMessage">phone.sendGroupCallMessage</a>.<code>send_as</code>.</td></tr></tbody></table>
