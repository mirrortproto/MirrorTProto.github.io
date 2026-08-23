---
title: "updatePinnedMessages"
original: "https://core.telegram.org/constructor/updatePinnedMessages"
section: ref
description: "Some messages were pinned in a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedMessages","url":"/constructor/updatePinnedMessages/"}]
layout: layout.njk
---

# updatePinnedMessages

Some messages were pinned in a chat

```
updatePinnedMessages#ed85eab5 flags:# pinned:flags.0?true peer:Peer messages:Vector<int> pts:int pts_count:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether the messages were pinned or unpinned</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Peer</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Message IDs</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
