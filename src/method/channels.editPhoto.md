---
title: "channels.editPhoto"
original: "https://core.telegram.org/method/channels.editPhoto"
section: ref
description: "Change the photo of a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.editPhoto","url":"/method/channels.editPhoto/"}]
layout: layout.njk
---

# channels.editPhoto

Change the photo of a [channel/supergroup](/api/channel/)

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Channel/supergroup whose photo should be edited</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/InputChatPhoto">InputChatPhoto</a></td><td>New photo</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>FILE_REFERENCE_INVALID</td><td>The specified <a href="/api/file-references">file reference</a> is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Photo is too small.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_FILE_MISSING</td><td>Profile photo file missing.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Photo invalid.</td></tr><tr><td>400</td><td>STICKER_MIME_INVALID</td><td>The specified sticker MIME type is invalid.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [File references](/api/file-references/)

How to handle file references.
