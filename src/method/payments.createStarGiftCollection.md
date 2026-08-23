---
title: "payments.createStarGiftCollection"
original: "https://core.telegram.org/method/payments.createStarGiftCollection"
section: ref
description: "Create a star gift collection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.createStarGiftCollection","url":"/method/payments.createStarGiftCollection/"}]
layout: layout.njk
---

# payments.createStarGiftCollection

Create a [star gift collection »](/api/gifts/#gift-collections).

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
---functions---
payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where to create the collection.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Title of the collection.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputSavedStarGift">InputSavedStarGift</a>&gt;</td><td>Gifts added to the collection.</td></tr></tbody></table>

### Result

[StarGiftCollection](/type/StarGiftCollection/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
