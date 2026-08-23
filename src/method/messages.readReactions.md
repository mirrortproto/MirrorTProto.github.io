---
title: "messages.readReactions"
original: "https://core.telegram.org/method/messages.readReactions"
section: ref
description: "Mark message reactions » as read"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readReactions","url":"/method/messages.readReactions/"}]
layout: layout.njk
---

# messages.readReactions

Mark [message reactions »](/api/reactions/) as read

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Mark as read only reactions to messages within the specified <a href="/api/forum#forum-topics">forum topic</a></td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>If set, must be equal to the ID of a <a href="/api/monoforum">monoforum topic</a>: will affect that topic in the monoforum passed in <code>peer</code>.</td></tr></tbody></table>

### Result

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
