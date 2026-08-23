---
title: "payments.getStarGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionAcquiredGifts"
section: ref
description: "Fetches all the gifts that the current user won in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftAuctionAcquiredGifts","url":"/method/payments.getStarGiftAuctionAcquiredGifts/"}]
layout: layout.njk
---

# payments.getStarGiftAuctionAcquiredGifts

Fetches all the gifts that the current user won in an [auction](/api/auctions/).

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
---functions---
payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The gift ID linked to the auction.</td></tr></tbody></table>

### Result

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
