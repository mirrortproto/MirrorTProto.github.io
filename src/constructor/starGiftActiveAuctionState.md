---
title: "starGiftActiveAuctionState"
original: "https://core.telegram.org/constructor/starGiftActiveAuctionState"
section: ref
description: "Contains info about an auction where the user has placed a bid »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftActiveAuctionState","url":"/constructor/starGiftActiveAuctionState/"}]
layout: layout.njk
---

# starGiftActiveAuctionState

Contains info about [an auction where the user has placed a bid »](/api/auctions/).

```
starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>The <a href="/api/gifts#collectible-gifts">collectible gift »</a> currently being distributed in the auction.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState">StarGiftAuctionState</a></td><td>Auction state</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState">StarGiftAuctionUserState</a></td><td>Auction state related to the current user (i.e. info about placed bids, won gifts and so on).</td></tr></tbody></table>

### Type

[StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
