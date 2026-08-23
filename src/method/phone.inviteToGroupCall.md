---
title: "phone.inviteToGroupCall"
original: "https://core.telegram.org/method/phone.inviteToGroupCall"
section: ref
description: "Invite a set of users to a video chat/livestream »; cannot be used for live stories » or conference calls »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.inviteToGroupCall","url":"/method/phone.inviteToGroupCall/"}]
layout: layout.njk
---

# phone.inviteToGroupCall

Invite a set of users to a [video chat/livestream »](/api/group-calls/#video-chats-livestreams); cannot be used for [live stories »](/api/group-calls/#live-stories) or [conference calls »](/api/group-calls/#conference-calls).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.inviteToGroupCall#7b393160 call:InputGroupCall users:Vector<InputUser> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>The <a href="/api/group-calls#video-chats-livestreams">video chat/livestream »</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>The users to invite.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>CHAT_TYPE_INVALID</td><td>The specified user type is invalid.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>400</td><td>INVITE_FORBIDDEN_WITH_JOINAS</td><td>If the user has anonymously joined a group call as a channel, they can't invite other users to the group call because that would cause deanonymization, because the invite would be sent using the original user ID, not the anonymized channel ID.</td></tr><tr><td>400</td><td>USER_ALREADY_INVITED</td><td>You have already invited this user.</td></tr><tr><td>403</td><td>USER_NOT_PARTICIPANT</td><td>You're not a member of this supergroup/channel.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
