---
title: "channels.updatePaidMessagesPrice"
original: "https://core.telegram.org/method/channels.updatePaidMessagesPrice"
section: ref
description: "Enable or disable paid messages » in this supergroup or monoforum."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.updatePaidMessagesPrice","url":"/method/channels.updatePaidMessagesPrice/"}]
layout: layout.njk
---

# channels.updatePaidMessagesPrice

Enable or disable [paid messages »](/api/paid-messages/) in this [supergroup](/api/channel/) or [monoforum](/api/monoforum/).

Also used to [enable or disable monoforums aka direct messages in a channel](/api/monoforum/).

Note that passing the ID of the monoforum itself to `channel` will return a `CHANNEL_MONOFORUM_UNSUPPORTED` error: pass the ID of the associated channel to edit the settings of the associated monoforum, instead.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>broadcast_messages_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Only usable for channels, enables or disables the associated <a href="/api/monoforum">monoforum aka direct messages</a>.</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Pass the supergroup ID for supergroups and the ID of the <a href="/api/channel">channel</a> to modify the setting in the associated monoforum.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Specifies the required amount of <a href="/api/stars">Telegram Stars</a> users must pay to send messages to the supergroup or monoforum.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Monoforums</a> do not support this feature.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>400</td><td>STARS_AMOUNT_INVALID</td><td>The specified amount in stars is invalid.</td></tr></tbody></table>

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
