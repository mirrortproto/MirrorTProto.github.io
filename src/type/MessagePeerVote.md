---
title: "MessagePeerVote"
original: "https://core.telegram.org/type/MessagePeerVote"
section: ref
description: "How a user voted in a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessagePeerVote","url":"/type/MessagePeerVote/"}]
layout: layout.njk
---

# MessagePeerVote

How a user voted in a poll

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messagePeerVote">messagePeerVote</a></td><td>How a peer voted in a poll</td></tr><tr><td><a href="/constructor/messagePeerVoteInputOption">messagePeerVoteInputOption</a></td><td>How a peer voted in a poll (reduced constructor, returned if an <code>option</code> was provided to <a href="/method/messages.getPollVotes">messages.getPollVotes</a>)</td></tr><tr><td><a href="/constructor/messagePeerVoteMultiple">messagePeerVoteMultiple</a></td><td>How a peer voted in a multiple-choice poll</td></tr></tbody></table>
