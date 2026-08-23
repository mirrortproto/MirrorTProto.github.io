---
title: "messages.AffectedHistory"
original: "https://core.telegram.org/type/messages.AffectedHistory"
section: ref
description: "Object contains info on affected part of communication history with the user or in a chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.AffectedHistory","url":"/type/messages.AffectedHistory/"}]
layout: layout.njk
---

# messages.AffectedHistory

Object contains info on affected part of communication history with the user or in a chat.

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;

---functions---

messages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
messages.unpinAllMessages#62dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;

channels.deleteParticipantHistory#367544db channel:InputChannel participant:InputPeer = messages.AffectedHistory;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedHistory">messages.affectedHistory</a></td><td>Affected part of communication history with the user or in a chat.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.deleteHistory">messages.deleteHistory</a></td><td>Deletes communication history.</td></tr><tr><td><a href="/method/messages.readMentions">messages.readMentions</a></td><td>Mark mentions as read; can be used in <a href="/api/forum">forums</a> but <strong>cannot</strong> be used in <a href="/api/monoforum">monoforums</a>.</td></tr><tr><td><a href="/method/messages.unpinAllMessages">messages.unpinAllMessages</a></td><td><a href="/api/pin">Unpin</a> all pinned messages</td></tr><tr><td><a href="/method/messages.readReactions">messages.readReactions</a></td><td>Mark <a href="/api/reactions">message reactions »</a> as read</td></tr><tr><td><a href="/method/messages.deleteSavedHistory">messages.deleteSavedHistory</a></td><td>Deletes messages from a <a href="/api/monoforum">monoforum topic »</a>, or deletes messages forwarded from a specific peer to <a href="/api/saved-messages">saved messages »</a>.</td></tr><tr><td><a href="/method/messages.deleteTopicHistory">messages.deleteTopicHistory</a></td><td>Delete message history of a <a href="/api/forum">forum topic</a></td></tr><tr><td><a href="/method/messages.readPollVotes">messages.readPollVotes</a></td><td>Mark all <a href="/api/poll#unread-poll-votes">unread poll votes »</a> in a chat as read</td></tr><tr><td><a href="/method/channels.deleteParticipantHistory">channels.deleteParticipantHistory</a></td><td>Delete all messages sent by a specific participant of a given supergroup</td></tr></tbody></table>
