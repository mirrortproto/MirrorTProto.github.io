---
title: "chatlists.joinChatlistUpdates"
original: "https://core.telegram.org/method/chatlists.joinChatlistUpdates"
section: ref
description: "Join channels and supergroups recently added to a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.joinChatlistUpdates","url":"/method/chatlists.joinChatlistUpdates/"}]
layout: layout.njk
---

# chatlists.joinChatlistUpdates

Join channels and supergroups recently added to a [chat folder deep link »](/api/links/#chat-folder-links).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
chatlists.joinChatlistUpdates#e089f8f5 chatlist:InputChatlist peers:Vector<InputPeer> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>The folder</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>List of new chats to join, fetched using <a href="/method/chatlists.getChatlistUpdates">chatlists.getChatlistUpdates</a> and filtered as specified in the <a href="/api/folders#shared-folders">documentation »</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_INCLUDE_EMPTY</td><td>The include_peers vector of the filter is empty.</td></tr></tbody></table>

### Related pages

#### [chatlists.getChatlistUpdates](/method/chatlists.getChatlistUpdates/)

Fetch new chats associated with an imported [chat folder deep link »](/api/links/#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](/api/config/#chatlist-update-period)).

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
