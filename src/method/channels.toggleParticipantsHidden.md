---
title: "channels.toggleParticipantsHidden"
original: "https://core.telegram.org/method/channels.toggleParticipantsHidden"
section: ref
description: "Hide or display the participants list in a supergroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.toggleParticipantsHidden","url":"/method/channels.toggleParticipantsHidden/"}]
layout: layout.njk
---

# channels.toggleParticipantsHidden

Hide or display the participants list in a [supergroup](/api/channel/).

The supergroup must have at least `hidden_members_group_size_min` participants in order to use this method, as specified by the [client configuration parameters »](/api/config/#client-configuration).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.toggleParticipantsHidden#6a6e7854 channel:InputChannel enabled:Bool = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Supergroup ID</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>If true, will hide the participants list; otherwise will unhide it.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>PARTICIPANTS_TOO_FEW</td><td>Not enough participants.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
