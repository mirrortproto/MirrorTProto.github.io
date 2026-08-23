---
title: "messages.updatePinnedMessage"
original: "https://core.telegram.org/method/messages.updatePinnedMessage"
section: ref
description: "Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.updatePinnedMessage","url":"/method/messages.updatePinnedMessage/"}]
layout: layout.njk
---

# messages.updatePinnedMessage

Pin a message

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Pin the message silently, without triggering a notification</td></tr><tr><td><strong>unpin</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether the message should unpinned or pinned</td></tr><tr><td><strong>pm_oneside</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Whether the message should only be pinned on the local side of a one-to-one chat</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer where to pin the message</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The message to pin or unpin</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_ONESIDE_NOT_AVAIL</td><td>Bots can't pin messages in PM just for themselves.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Messages can't be set to the specified peer through the current <a href="/api/business#connected-bots">business connection</a>.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PIN_RESTRICTED</td><td>You can't pin messages.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
