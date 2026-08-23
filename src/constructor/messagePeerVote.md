---
title: "messagePeerVote"
original: "https://core.telegram.org/constructor/messagePeerVote"
section: ref
description: "How a peer voted in a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messagePeerVote","url":"/constructor/messagePeerVote/"}]
layout: layout.njk
---

# messagePeerVote

How a peer voted in a poll

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Peer ID</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>The option chosen by the peer</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>When did the peer cast the vote</td></tr></tbody></table>

### Type

[MessagePeerVote](/type/MessagePeerVote/)
