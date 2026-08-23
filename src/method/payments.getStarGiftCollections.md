---
title: "payments.getStarGiftCollections"
original: "https://core.telegram.org/method/payments.getStarGiftCollections"
section: ref
description: "Fetches all star gift collections » of a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftCollections","url":"/method/payments.getStarGiftCollections/"}]
layout: layout.njk
---

# payments.getStarGiftCollections

Fetches all [star gift collections »](/api/gifts/#gift-collections) of a peer.

```
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;
---functions---
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Hash (<a href="/api/offsets#hash-generation">generated as specified here »</a>) using the <a href="/constructor/starGiftCollection">starGiftCollection</a>.<code>hash</code> field (<strong>not</strong> the <code>collection_id</code> field) of all collections returned by a previous method call, to avoid refetching the result if it hasn't changed.</td></tr></tbody></table>

### Result

[payments.StarGiftCollections](/type/payments.StarGiftCollections/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [starGiftCollection](/constructor/starGiftCollection/)

Represents a [star gift collection »](/api/gifts/#gift-collections).

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
