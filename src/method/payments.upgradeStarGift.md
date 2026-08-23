---
title: "payments.upgradeStarGift"
original: "https://core.telegram.org/method/payments.upgradeStarGift"
section: ref
description: "Upgrade a gift to a collectible gift: can only be used if the upgrade was already paid by the gift sender; see here » for more info on the full flow (including the different flow…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.upgradeStarGift","url":"/method/payments.upgradeStarGift/"}]
layout: layout.njk
---

# payments.upgradeStarGift

Upgrade a [gift](/api/gifts/) to a [collectible gift](/api/gifts/#collectible-gifts): can only be used if the upgrade was already paid by the gift sender; see [here »](/api/gifts/#upgrade-a-gift-to-a-collectible-gift) for more info on the full flow (including the different flow to use in case the upgrade was not paid by the gift sender).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>keep_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Set this flag to keep the original gift text, sender and receiver in the upgraded gift as a <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a> attribute.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>The gift to upgrade</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PAYMENT_REQUIRED</td><td>Payment is required for this action, see <a href="/api/gifts">here&nbsp;»</a> for more info.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>The passed inputSavedStarGiftChat.saved_id is empty.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_CONVERTED</td><td>The specified star gift was already converted to Stars.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>The specified gift was already upgraded to a collectible gift.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>A received gift can only be upgraded to a collectible gift if the <a href="/constructor/messageActionStarGift">messageActionStarGift</a>/<a href="/constructor/savedStarGift">savedStarGift</a>.<code>can_upgrade</code> flag is set.</td></tr></tbody></table>

### Related pages

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](/api/gifts/), before it was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](/api/gifts/) owned by a peer.
