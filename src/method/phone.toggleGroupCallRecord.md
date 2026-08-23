---
title: "phone.toggleGroupCallRecord"
original: "https://core.telegram.org/method/phone.toggleGroupCallRecord"
section: ref
description: "Start or stop recording a video chat/livestream, see here » for more info. The recorded audio and video streams will be automatically sent to Saved Messages (the chat with…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.toggleGroupCallRecord","url":"/method/phone.toggleGroupCallRecord/"}]
layout: layout.njk
---

# phone.toggleGroupCallRecord

Start or stop recording a video chat/livestream, see [here »](/api/group-calls/#video-chats-livestreams) for more info. The recorded audio and video streams will be automatically sent to Saved Messages (the chat with ourselves).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.toggleGroupCallRecord#f128c708 flags:# start:flags.0?true video:flags.2?true call:InputGroupCall title:flags.1?string video_portrait:flags.2?Bool = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>start</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to start or stop recording</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Whether to also record video streams</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Video chat/livestream to record</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Recording title</td></tr><tr><td><strong>video_portrait</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Bool">Bool</a></td><td>If video stream recording is enabled, whether to record in portrait or landscape mode</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>400</td><td>GROUPCALL_NOT_MODIFIED</td><td>Group call settings weren't modified.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
