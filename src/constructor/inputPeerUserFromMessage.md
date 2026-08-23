---
title: "inputPeerUserFromMessage"
original: "https://core.telegram.org/constructor/inputPeerUserFromMessage"
section: ref
description: "Defines a min user that was seen in a certain message of a certain chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPeerUserFromMessage","url":"/constructor/inputPeerUserFromMessage/"}]
layout: layout.njk
---

# inputPeerUserFromMessage

Defines a [min](/api/min/) user that was seen in a certain message of a certain chat.

```
inputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The chat where the user was seen</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The message ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The identifier of the user that was seen</td></tr></tbody></table>

### Type

[InputPeer](/type/InputPeer/)

### Related pages

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.
