---
title: "channels.restrictSponsoredMessages"
original: "https://core.telegram.org/method/channels.restrictSponsoredMessages"
section: ref
description: "Disable ads on the specified channel, for all users."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.restrictSponsoredMessages","url":"/method/channels.restrictSponsoredMessages/"}]
layout: layout.njk
---

# channels.restrictSponsoredMessages

Disable ads on the specified channel, for all users.

Available only after reaching at least the [boost level »](/api/boost/) specified in the [`channel_restrict_sponsored_level_min` »](/api/config/#channel-restrict-sponsored-level-min) config parameter.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.restrictSponsoredMessages#9ae91519 channel:InputChannel restricted:Bool = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>The channel.</td></tr><tr><td><strong>restricted</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether to disable or re-enable ads.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
