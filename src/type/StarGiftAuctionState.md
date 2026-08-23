---
title: "StarGiftAuctionState"
original: "https://core.telegram.org/type/StarGiftAuctionState"
section: ref
description: "State of a collectible gift auction »: active/pending, finished, or unchanged with respect to a locally cached version."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAuctionState","url":"/type/StarGiftAuctionState/"}]
layout: layout.njk
---

# StarGiftAuctionState

State of a [collectible gift auction »](/api/auctions/): active/pending, finished, or unchanged with respect to a locally cached version.

```
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionStateNotModified">starGiftAuctionStateNotModified</a></td><td>Returned only by auction methods (never by updates) if the passed <code>version</code> is equal to the remote <a href="/api/auctions">auction »</a>.<code>version</code>, meaning auction information hasn't changed over the locally cached version.</td></tr><tr><td><a href="/constructor/starGiftAuctionState">starGiftAuctionState</a></td><td>Represents an active or pending <a href="/api/auctions">auction »</a>.</td></tr><tr><td><a href="/constructor/starGiftAuctionStateFinished">starGiftAuctionStateFinished</a></td><td>Represents a finished <a href="/api/auctions">auction »</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
