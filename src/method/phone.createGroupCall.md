---
title: "phone.createGroupCall"
original: "https://core.telegram.org/method/phone.createGroupCall"
section: ref
description: "Create a video chat or livestream, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.createGroupCall","url":"/method/phone.createGroupCall/"}]
layout: layout.njk
---

# phone.createGroupCall

Create a video chat or livestream, see [here »](/api/group-calls/#video-chats-livestreams) for the full flow.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>rtmp_stream</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Create the call in <a href="/api/group-calls#stream-mode">RTMP livestream mode »</a>, where one external streamer publishes all audio and video</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Associate the group call or livestream to the provided <a href="/api/channel">group/supergroup/channel</a></td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Unique client message ID required to prevent creation of duplicate group calls. See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Call title, if not set defaults to the group/channel's name.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Schedule date, at least 10 seconds and at most 8 days in the future; the call must still be manually started using <a href="/method/phone.startScheduledGroupCall">phone.startScheduledGroupCall</a></td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CREATE_CALL_FAILED</td><td>An error occurred while creating the call.</td></tr><tr><td>400</td><td>GROUPCALL_ALREADY_DISCARDED</td><td>The group call was already discarded.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_INVALID</td><td>Invalid schedule date provided.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/)

Start a scheduled [group call](/api/group-calls/#video-chats-livestreams).
