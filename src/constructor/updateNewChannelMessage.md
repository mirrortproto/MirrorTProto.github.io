---
title: "updateNewChannelMessage"
original: "https://core.telegram.org/constructor/updateNewChannelMessage"
section: ref
description: "A new message was sent in a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNewChannelMessage","url":"/constructor/updateNewChannelMessage/"}]
layout: layout.njk
---

# updateNewChannelMessage

A new message was sent in a [channel/supergroup](/api/channel/)

```
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>New message</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
