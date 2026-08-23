---
title: "payments.resolveStarGiftOffer"
original: "https://core.telegram.org/method/payments.resolveStarGiftOffer"
section: ref
description: "Accept or decline a previously received collectible gift purchase offer », see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.resolveStarGiftOffer","url":"/method/payments.resolveStarGiftOffer/"}]
layout: layout.njk
---

# payments.resolveStarGiftOffer

Accept or decline a previously received [collectible gift purchase offer »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.resolveStarGiftOffer#e9ce781c flags:# decline:flags.0?true offer_msg_id:int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>decline</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, declines the offer; otherwise, accepts it.</td></tr><tr><td><strong>offer_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Identifier of the <a href="/constructor/messageActionStarGiftPurchaseOffer">messageActionStarGiftPurchaseOffer</a> service message describing the offer to act upon.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr></tbody></table>

### Related pages

#### [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/)

Contains an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
