---
title: "channels.setBoostsToUnblockRestrictions"
original: "https://core.telegram.org/method/channels.setBoostsToUnblockRestrictions"
section: ref
description: "Admins with ban\\_users admin rights » may allow users that apply a certain number of booosts » to the group to bypass slow mode » and other » supergroup restrictions, see here »…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.setBoostsToUnblockRestrictions","url":"/method/channels.setBoostsToUnblockRestrictions/"}]
layout: layout.njk
---

# channels.setBoostsToUnblockRestrictions

Admins with [ban\_users admin rights »](/constructor/chatAdminRights/) may allow users that apply a certain number of [booosts »](/api/boost/) to the group to bypass [slow mode »](/method/channels.toggleSlowMode/) and [other »](/api/rights/#default-rights) supergroup restrictions, see [here »](/api/boost/#bypass-slowmode-and-chat-restrictions) for more info.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.setBoostsToUnblockRestrictions#ad399cee channel:InputChannel boosts:int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>The supergroup.</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The number of required boosts (1-8, 0 to disable).</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [chatAdminRights](/constructor/chatAdminRights/)

Represents the rights of an admin in a [channel/supergroup](/api/channel/).

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
