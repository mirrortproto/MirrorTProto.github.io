---
title: "phone.getGroupCallChainBlocks"
original: "https://core.telegram.org/method/phone.getGroupCallChainBlocks"
section: ref
description: "Fetch blocks from a conference call subchain »; handle the returned updateGroupCallChainBlocks as specified here »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCallChainBlocks","url":"/method/phone.getGroupCallChainBlocks/"}]
layout: layout.njk
---

# phone.getGroupCallChainBlocks

Fetch blocks from a conference call [subchain »](/api/end-to-end/group-calls/#subchains); handle the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) as [specified here »](/api/end-to-end/group-calls/#handling-updates).

If the number of blocks returned by _any_ call to this method is equal to `limit`, this method must be re-invoked immediately after processing the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), with the newly committed `offset` (usually equal to the returned `next_offset`).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Conference whose subchain blocks should be fetched</td></tr><tr><td><strong>sub_chain_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>0</code> for the main state blockchain, <code>1</code> for the call verification subchain</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Fetch blocks starting from this height; pass <code>-1</code> to fetch the latest block</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of blocks to return in this call, <a href="/api/offsets">see pagination</a>, max 100.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>The specified group call is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.

#### [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/)

Contains conference call blockchain blocks, see [handling E2E group call updates »](/api/end-to-end/group-calls/#handling-updates).
