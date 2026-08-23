---
title: "phone.discardCall"
original: "https://core.telegram.org/method/phone.discardCall"
section: ref
description: "Refuse or end running call, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.discardCall","url":"/method/phone.discardCall/"}]
layout: layout.njk
---

# phone.discardCall

Refuse or end running call, see [here »](/api/calls/#one-to-one-calls) for more info on the full flow.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether this is a video call</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>The phone call</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Call duration</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/PhoneCallDiscardReason">PhoneCallDiscardReason</a></td><td>Why was the call discarded</td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Preferred libtgvoip relay ID</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_ACCEPTED</td><td>The call was already accepted.</td></tr><tr><td>500</td><td>CALL_OCCUPY_FAILED</td><td>The call failed because the user is already making another call.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>The provided call peer object is invalid.</td></tr></tbody></table>

### Related pages

#### [Phone calls](/api/calls/)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
