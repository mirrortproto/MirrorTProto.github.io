---
title: "Channels.ChannelParticipants"
original: "https://core.telegram.org/type/channels.ChannelParticipants"
section: ref
description: "Channel/supergroup participants"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Channels.ChannelParticipants","url":"/type/channels.ChannelParticipants/"}]
layout: layout.njk
---

# Channels.ChannelParticipants

Channel/supergroup participants

```
channels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;
channels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;

---functions---

channels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.channelParticipants">channels.channelParticipants</a></td><td>Represents multiple channel participants</td></tr><tr><td><a href="/constructor/channels.channelParticipantsNotModified">channels.channelParticipantsNotModified</a></td><td>No new participant info could be found</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getParticipants">channels.getParticipants</a></td><td>Get the participants of a <a href="/api/channel">supergroup/channel</a></td></tr></tbody></table>
