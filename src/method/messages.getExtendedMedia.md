---
title: "messages.getExtendedMedia"
original: "https://core.telegram.org/method/messages.getExtendedMedia"
section: ref
description: "Fetch updated information about paid media, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getExtendedMedia","url":"/method/messages.getExtendedMedia/"}]
layout: layout.njk
---

# messages.getExtendedMedia

Fetch updated information about [paid media, see here »](/api/paid-media/) for the full flow.

This method will return an array of [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) updates, only for messages containing **already bought** paid media.  
No information will be returned for messages containing not yet bought paid media.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer with visible paid media messages.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>IDs of currently visible messages containing paid media.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Related pages

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/)

You [bought a paid media »](/api/paid-media/): this update contains the revealed media.
