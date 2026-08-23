---
title: "Payments.StarGiftAuctionState"
original: "https://core.telegram.org/type/payments.StarGiftAuctionState"
section: ref
description: "Describes a collectible gift auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftAuctionState","url":"/type/payments.StarGiftAuctionState/"}]
layout: layout.njk
---

# Payments.StarGiftAuctionState

Describes a [collectible gift auction »](/api/auctions/).

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;

---functions---

payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionState">payments.starGiftAuctionState</a></td><td>Describes a <a href="/api/auctions">collectible gift auction »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionState">payments.getStarGiftAuctionState</a></td><td>Returns info about a <a href="/api/auctions">collectible gift auction »</a>; also subscribes the user to auction updates, see <a href="/api/auctions">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
