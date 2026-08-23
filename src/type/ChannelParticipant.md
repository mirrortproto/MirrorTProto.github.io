---
title: "ChannelParticipant"
original: "https://core.telegram.org/type/ChannelParticipant"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChannelParticipant","url":"/type/ChannelParticipant/"}]
layout: layout.njk
---

# ChannelParticipant

Channel participant

```
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channelParticipant">channelParticipant</a></td><td>Channel/supergroup participant</td></tr><tr><td><a href="/constructor/channelParticipantSelf">channelParticipantSelf</a></td><td>Myself</td></tr><tr><td><a href="/constructor/channelParticipantCreator">channelParticipantCreator</a></td><td>Channel/supergroup creator</td></tr><tr><td><a href="/constructor/channelParticipantAdmin">channelParticipantAdmin</a></td><td>Admin</td></tr><tr><td><a href="/constructor/channelParticipantBanned">channelParticipantBanned</a></td><td>Banned/kicked user</td></tr><tr><td><a href="/constructor/channelParticipantLeft">channelParticipantLeft</a></td><td>A participant that left the channel/supergroup</td></tr></tbody></table>
