---
title: "messages.sendWebViewData"
original: "https://core.telegram.org/method/messages.sendWebViewData"
section: ref
description: "Used by the user to relay data from an opened reply keyboard bot mini app to the bot that owns it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendWebViewData","url":"/method/messages.sendWebViewData/"}]
layout: layout.njk
---

# messages.sendWebViewData

Used by the user to relay data from an opened [reply keyboard bot mini app](/api/bots/webapps/) to the bot that owns it.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Bot that owns the web app</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Unique client message ID to prevent duplicate sending of the same event. See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>button_text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Text of the <a href="/constructor/keyboardButtonSimpleWebView">keyboardButtonSimpleWebView</a> that was pressed to open the web app.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Data to relay to the bot, obtained from a <a href="/api/web-events#web-app-data-send"><code>web_app_data_send</code> JS event</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Button to open a [bot mini app](/api/bots/webapps/) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app.

Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards.

When pressed, clients must open a [Keyboard Button Mini App](/api/bots/webapps/#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

#### [Web events](/api/web-events/)

How telegram apps interact with webpages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
