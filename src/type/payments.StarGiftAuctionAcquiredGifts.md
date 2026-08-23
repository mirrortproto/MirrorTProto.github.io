---
title: "Payments.StarGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/type/payments.StarGiftAuctionAcquiredGifts"
section: ref
description: "Describes all the gifts that the current user won in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftAuctionAcquiredGifts","url":"/type/payments.StarGiftAuctionAcquiredGifts/"}]
layout: layout.njk
---

# Payments.StarGiftAuctionAcquiredGifts

Describes all the gifts that the current user won in an [auction](/api/auctions/).

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;

---functions---

payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionAcquiredGifts">payments.starGiftAuctionAcquiredGifts</a></td><td>Describes all the gifts that the current user won in an <a href="/api/auctions">auction</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionAcquiredGifts">payments.getStarGiftAuctionAcquiredGifts</a></td><td>Fetches all the gifts that the current user won in an <a href="/api/auctions">auction</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
