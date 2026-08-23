---
title: "messages.editChatPhoto"
original: "https://core.telegram.org/method/messages.editChatPhoto"
section: ref
description: "Changes chat photo and sends a service message on it"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editChatPhoto","url":"/method/messages.editChatPhoto/"}]
layout: layout.njk
---

# messages.editChatPhoto

Changes chat photo and sends a service message on it

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.editChatPhoto#35ddd674 chat_id:long photo:InputChatPhoto = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Chat ID</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/InputChatPhoto">InputChatPhoto</a></td><td>Photo to be set</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Photo is too small.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Photo invalid.</td></tr></tbody></table>
