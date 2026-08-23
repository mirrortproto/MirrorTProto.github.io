---
title: "messageEmpty"
original: "https://core.telegram.org/constructor/messageEmpty"
section: ref
description: "Empty constructor, non-existent message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEmpty","url":"/constructor/messageEmpty/"}]
layout: layout.njk
---

# messageEmpty

Empty constructor, non-existent message.

```
messageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message identifier</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Peer ID, the chat where this message was sent</td></tr></tbody></table>

### Type

[Message](/type/Message/)
