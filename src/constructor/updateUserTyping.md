---
title: "updateUserTyping"
original: "https://core.telegram.org/constructor/updateUserTyping"
section: ref
description: "The user is preparing a message; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateUserTyping","url":"/constructor/updateUserTyping/"}]
layout: layout.njk
---

# updateUserTyping

The user is preparing a message; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing

```
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User id</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>If set, this notification was sent within a <a href="/api/forum#bot-forums">bot forum topic »</a>.</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction">SendMessageAction</a></td><td>Action type</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
