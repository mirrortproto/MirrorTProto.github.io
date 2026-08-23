---
title: "phone.toggleGroupCallSettings"
original: "https://core.telegram.org/method/phone.toggleGroupCallSettings"
section: ref
description: "Change group call settings. Each setting supports different group call types, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.toggleGroupCallSettings","url":"/method/phone.toggleGroupCallSettings/"}]
layout: layout.njk
---

# phone.toggleGroupCallSettings

Change group call settings. Each setting supports different group call types, see [here »](/api/group-calls/#managing-an-active-group-call) for more info.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reset_invite_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Invalidate existing invite links for video chats, livestreams and conferences</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Group call whose settings should be changed</td></tr><tr><td><strong>join_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Whether users joining a non-RTMP video chat/livestream should be muted by default</td></tr><tr><td><strong>messages_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Bool">Bool</a></td><td>Enable or disable the in-call message overlay in video chats/livestreams, conferences and live stories, including in RTMP mode</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/long">long</a></td><td>Set the minimum Telegram Stars donation required from users other than the live story owner for each comment; the owner may always comment without donating, and <code>0</code> allows free comments for everyone</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_CHANGE_FORBIDDEN</td><td>You cannot change this group call setting.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>The specified group call cannot be used in this context.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr><tr><td>400</td><td>GROUPCALL_NOT_MODIFIED</td><td>Group call settings weren't modified.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
