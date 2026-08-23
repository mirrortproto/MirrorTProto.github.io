---
title: "updateDraftMessage"
original: "https://core.telegram.org/constructor/updateDraftMessage"
section: ref
description: "Notifies a change of a message draft."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDraftMessage","url":"/constructor/updateDraftMessage/"}]
layout: layout.njk
---

# updateDraftMessage

Notifies a change of a message [draft](/api/drafts/).

```
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The peer to which the draft is associated</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>ID of the <a href="/api/forum#forum-topics">forum topic</a> to which the draft is associated</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>If set, the draft is related to the specified <a href="/api/monoforum">monoforum topic ID »</a>.</td></tr><tr><td><strong>draft</strong></td><td style="text-align: center;"><a href="/type/DraftMessage">DraftMessage</a></td><td>The draft</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Message drafts](/api/drafts/)

How to handle message drafts
