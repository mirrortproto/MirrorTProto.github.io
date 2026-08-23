---
title: "starGiftAuctionAcquiredGift"
original: "https://core.telegram.org/constructor/starGiftAuctionAcquiredGift"
section: ref
description: "Describes a gift that the current user won in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionAcquiredGift","url":"/constructor/starGiftAuctionAcquiredGift/"}]
layout: layout.njk
---

# starGiftAuctionAcquiredGift

Describes a gift that the current user won in an auction.

```
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>name_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, your name will be hidden if the destination peer decides to display the gift on their profile (they will still see that you sent the gift).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The peer that received the gift.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>When was the gift obtained.</td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The amount in <a href="/api/stars">Telegram Stars</a> that was bid in order to obtain the gift.</td></tr><tr><td><strong>round</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The round number where the gift was obtained.</td></tr><tr><td><strong>pos</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The position of the gift in the auction.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Optional message that attached with the gift, passed when making the bid.</td></tr><tr><td><strong>gift_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>If set, the collectible number of the won gift among all collectibles of the same type.<br>This field is optional because <strong>only</strong> auction collectibles won before this field was introduced in the API will not have this flag set.</td></tr></tbody></table>

### Type

[StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
