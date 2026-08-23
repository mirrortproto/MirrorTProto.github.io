---
title: "inputStarGiftAuctionSlug"
original: "https://core.telegram.org/constructor/inputStarGiftAuctionSlug"
section: ref
description: "Used to fetch auctions using the slug of an auction deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStarGiftAuctionSlug","url":"/constructor/inputStarGiftAuctionSlug/"}]
layout: layout.njk
---

# inputStarGiftAuctionSlug

Used to fetch [auctions](/api/auctions/) using the [slug of an auction deep link »](/api/links/#auction-links).

```
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#auction-links">Auction deep link slug »</a>.</td></tr></tbody></table>

### Type

[InputStarGiftAuction](/type/InputStarGiftAuction/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
