---
title: "Channels.ChannelParticipant"
original: "https://core.telegram.org/type/channels.ChannelParticipant"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Channels.ChannelParticipant","url":"/type/channels.ChannelParticipant/"}]
layout: layout.njk
---

# Channels.ChannelParticipant

Channel participant

```
channels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;

---functions---

channels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.channelParticipant">channels.channelParticipant</a></td><td>Represents a channel participant</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getParticipant">channels.getParticipant</a></td><td>Get info about a <a href="/api/channel">channel/supergroup</a> participant</td></tr></tbody></table>
