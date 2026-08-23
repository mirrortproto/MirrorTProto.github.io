---
title: "channels.joinChannel"
original: "https://core.telegram.org/method/channels.joinChannel"
section: ref
description: "Join a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.joinChannel","url":"/method/channels.joinChannel/"}]
layout: layout.njk
---

# channels.joinChannel

Join a channel/supergroup

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.joinChannel#24b524c5 channel:InputChannel = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Channel/supergroup to join</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>You have joined too many channels/supergroups.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>420</td><td>FROZEN_METHOD_INVALID</td><td>The current account is <a href="/api/auth#frozen-accounts">frozen</a>, and thus cannot execute the specified action.</td></tr><tr><td>400</td><td>INVITE_HASH_EMPTY</td><td>The invite hash is empty.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>The invite link has expired.</td></tr><tr><td>400</td><td>INVITE_HASH_INVALID</td><td>The invite hash is invalid.</td></tr><tr><td>400</td><td>INVITE_REQUEST_SENT</td><td>You have successfully requested to join this chat or channel.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>The maximum number of users has been exceeded (to create a chat, for example).</td></tr><tr><td>400</td><td>USER_ALREADY_PARTICIPANT</td><td>The user is already in the group.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>USER_CHANNELS_TOO_MUCH</td><td>One of the users you tried to add is already in too many channels/supergroups.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
