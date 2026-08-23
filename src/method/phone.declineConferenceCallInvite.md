---
title: "phone.declineConferenceCallInvite"
original: "https://core.telegram.org/method/phone.declineConferenceCallInvite"
section: ref
description: "Decline a conference call invite."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.declineConferenceCallInvite","url":"/method/phone.declineConferenceCallInvite/"}]
layout: layout.njk
---

# phone.declineConferenceCallInvite

Decline a [conference call](/api/group-calls/#conference-calls) invite.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The ID of the <a href="/constructor/messageActionConferenceCall">messageActionConferenceCall</a> to decline.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr></tbody></table>

### Related pages

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Represents a [conference call »](/api/group-calls/#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](/api/config/#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
