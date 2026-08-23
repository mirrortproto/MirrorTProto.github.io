---
title: "messages.sendBotRequestedPeer"
original: "https://core.telegram.org/method/messages.sendBotRequestedPeer"
section: ref
description: "Send one or more chosen peers, as requested by a keyboardButtonRequestPeer button."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendBotRequestedPeer","url":"/method/messages.sendBotRequestedPeer/"}]
layout: layout.njk
---

# messages.sendBotRequestedPeer

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendBotRequestedPeer#91b2d060 peer:InputPeer msg_id:int button_id:int requested_peers:Vector<InputPeer> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The bot that sent the <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a> button.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>ID of the message that contained the reply keyboard with the <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a> button.</td></tr><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>If the button was prepared for a <a href="/api/bots/buttons#requesting-peers-via-mini-apps">Mini App »</a>, the Mini App request ID returned by <a href="/method/bots.requestWebViewButton">bots.requestWebViewButton</a>.</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The <code>button_id</code> field from the <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a> constructor.</td></tr><tr><td><strong>requested_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>The chosen peers.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Bots may use this method to prepare a peer request button for a [Mini App](/api/bots/webapps/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.
