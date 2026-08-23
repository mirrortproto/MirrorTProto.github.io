---
title: "messages.startBot"
original: "https://core.telegram.org/method/messages.startBot"
section: ref
description: "Start a conversation with a bot using a deep linking parameter"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.startBot","url":"/method/messages.startBot/"}]
layout: layout.njk
---

# messages.startBot

Start a conversation with a bot using a [deep linking parameter](/api/links/#bot-links)

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The chat where to start the bot, can be the bot's private chat or a group</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Random ID to avoid resending the same message. See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#bot-links">Deep linking parameter</a></td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>START_PARAM_EMPTY</td><td>The start parameter is empty.</td></tr><tr><td>400</td><td>START_PARAM_INVALID</td><td>Start parameter invalid.</td></tr><tr><td>400</td><td>START_PARAM_TOO_LONG</td><td>Start parameter is too long.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
