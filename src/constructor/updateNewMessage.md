---
title: "updateNewMessage"
original: "https://core.telegram.org/constructor/updateNewMessage"
section: ref
description: "New message in a private chat or in a basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNewMessage","url":"/constructor/updateNewMessage/"}]
layout: layout.njk
---

# updateNewMessage

New message in a private chat or in a [basic group](https://core.telegram.org/api/channel#basic-groups).

```
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Message</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>New quantity of actions in a message box</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of generated events</td></tr></tbody></table>

### Type

[Update](/type/Update/)
