---
title: "payments.reorderStarGiftCollections"
original: "https://core.telegram.org/method/payments.reorderStarGiftCollections"
section: ref
description: "Reorder the star gift collections » on an owned peer's profile."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.reorderStarGiftCollections","url":"/method/payments.reorderStarGiftCollections/"}]
layout: layout.njk
---

# payments.reorderStarGiftCollections

Reorder the [star gift collections »](/api/gifts/#gift-collections) on an owned peer's profile.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.reorderStarGiftCollections#c32af4cc peer:InputPeer order:Vector<int> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The owned peer.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>New collection order.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
