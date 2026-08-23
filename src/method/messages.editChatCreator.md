---
title: "messages.editChatCreator"
original: "https://core.telegram.org/method/messages.editChatCreator"
section: ref
description: "Transfer the ownership of a basic group, supergroup or channel to another user, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editChatCreator","url":"/method/messages.editChatCreator/"}]
layout: layout.njk
---

# messages.editChatCreator

Transfer the ownership of a basic group, supergroup or channel to another user, see [here »](/api/channel/#transferring-ownership-of-a-group-channel) for the full flow.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Owned group/supergroup/channel.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>ID of the new owner.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>The current account's <a href="/api/srp">2FA password</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>You're admin of too many public channels, make some channels private to change the username of this channel.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Could not add participants.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>You must <a href="/api/srp">enable 2FA</a> before executing this operation.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>The password was modified less than 24 hours ago, try again in %d seconds.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>This session was created less than 24 hours ago, try again in %d seconds.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Invalid SRP ID provided.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>The maximum number of users has been exceeded (to create a chat, for example).</td></tr><tr><td>403</td><td>USER_CHANNELS_TOO_MUCH</td><td>One of the users you tried to add is already in too many channels/supergroups.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>The provided user is not a mutual contact.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>The user's privacy settings do not allow you to do this.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
