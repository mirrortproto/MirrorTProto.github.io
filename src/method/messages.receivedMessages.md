---
title: "messages.receivedMessages"
original: "https://core.telegram.org/method/messages.receivedMessages"
section: ref
description: "Confirms receipt of messages by a client, cancels PUSH-notification sending."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.receivedMessages","url":"/method/messages.receivedMessages/"}]
layout: layout.njk
---

# messages.receivedMessages

Confirms receipt of messages by a client, cancels PUSH-notification sending.

```
---functions---
messages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum message ID available in a client.</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[ReceivedNotifyMessage](/type/ReceivedNotifyMessage/)\>

### Only users can use this method
