---
title: "chatlists.joinChatlistInvite"
original: "https://core.telegram.org/method/chatlists.joinChatlistInvite"
section: ref
description: "Import a chat folder deep link », joining some or all the chats in the folder."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.joinChatlistInvite","url":"/method/chatlists.joinChatlistInvite/"}]
layout: layout.njk
---

# chatlists.joinChatlistInvite

Import a [chat folder deep link »](/api/links/#chat-folder-links), joining some or all the chats in the folder.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
chatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>slug</code> obtained from a <a href="/api/links#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>List of new chats to join, fetched using <a href="/method/chatlists.checkChatlistInvite">chatlists.checkChatlistInvite</a> and filtered as specified in the <a href="/api/folders#shared-folders">documentation »</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>You have joined too many channels/supergroups.</td></tr><tr><td>400</td><td>CHATLISTS_TOO_MUCH</td><td>You have created too many folder links, hitting the <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config#chatlist-invites-limit-default">limits&nbsp;»</a>.</td></tr><tr><td>400</td><td>FILTER_INCLUDE_EMPTY</td><td>The include_peers vector of the filter is empty.</td></tr><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>The specified invite slug is empty.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>The specified chat folder link has expired.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/)

Obtain information about a [chat folder deep link »](/api/links/#chat-folder-links).

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
