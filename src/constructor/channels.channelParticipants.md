---
title: "channels.channelParticipants"
original: "https://core.telegram.org/constructor/channels.channelParticipants"
section: ref
description: "Represents multiple channel participants"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.channelParticipants","url":"/constructor/channels.channelParticipants/"}]
layout: layout.njk
---

# channels.channelParticipants

Represents multiple channel participants

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of participants that correspond to the given query</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ChannelParticipant">ChannelParticipant</a>&gt;</td><td>Participants</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Users mentioned in participant info</td></tr></tbody></table>

### Type

[channels.ChannelParticipants](/type/channels.ChannelParticipants/)
