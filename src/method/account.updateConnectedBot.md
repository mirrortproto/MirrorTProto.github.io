---
title: "account.updateConnectedBot"
original: "https://core.telegram.org/method/account.updateConnectedBot"
section: ref
description: "Connect a business bot » to the current account, or to change the current connection settings."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateConnectedBot","url":"/method/account.updateConnectedBot/"}]
layout: layout.njk
---

# account.updateConnectedBot

Connect a [business bot »](/api/bots/connected-business-bots/) to the current account, or to change the current connection settings.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>deleted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether to fully disconnect the bot from the current account.</td></tr><tr><td><strong>rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/BusinessBotRights">BusinessBotRights</a></td><td>Business bot rights.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot to connect or disconnect</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/InputBusinessBotRecipients">InputBusinessBotRecipients</a></td><td>Configuration for the business connection</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_BUSINESS_MISSING</td><td>The specified bot is not a business bot (the <a href="/constructor/user">user</a>.<code>bot_business</code> flag is not set).</td></tr><tr><td>400</td><td>BUSINESS_RECIPIENTS_EMPTY</td><td>You didn't set any flag in inputBusinessBotRecipients, thus the bot cannot work with <em>any</em> peer.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).
