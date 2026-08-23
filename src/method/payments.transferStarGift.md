---
title: "payments.transferStarGift"
original: "https://core.telegram.org/method/payments.transferStarGift"
section: ref
description: "Transfer a collectible gift to another user or channel: can only be used if transfer is free (i.e. messageActionStarGiftUnique.transfer_stars is not set); see here » for more info…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.transferStarGift","url":"/method/payments.transferStarGift/"}]
layout: layout.njk
---

# payments.transferStarGift

Transfer a [collectible gift](/api/gifts/#collectible-gifts) to another user or channel: can only be used if transfer is free (i.e. [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` is not set); see [here »](/api/gifts/#transferring-collectible-gifts) for more info on the full flow (including the different flow to use in case the transfer isn't free).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>The gift to transfer.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Destination peer.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PAYMENT_REQUIRED</td><td>Payment is required for this action, see <a href="/api/gifts">here&nbsp;»</a> for more info.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>The passed inputSavedStarGiftChat.saved_id is empty.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>The specified gift was not found.</td></tr><tr><td>400</td><td>STARGIFT_NOT_OWNER</td><td>You're not the owner of the gift you trying to transfer.</td></tr><tr><td>400</td><td>STARGIFT_NOT_UNIQUE</td><td>You can't transfer a non-collectible gift.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>You cannot transfer or sell a gift owned by another user.</td></tr><tr><td>400</td><td>STARGIFT_PEER_INVALID</td><td>The specified inputSavedStarGiftChat.peer is invalid.</td></tr><tr><td>400</td><td>STARGIFT_TRANSFER_TOO_EARLY_%d</td><td>You cannot transfer this gift yet, wait %d seconds.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](/api/gifts/) was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
