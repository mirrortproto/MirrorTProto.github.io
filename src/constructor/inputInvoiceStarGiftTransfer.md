---
title: "inputInvoiceStarGiftTransfer"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftTransfer"
section: ref
description: "Used to pay to transfer a collectible gift to another peer, see the gifts » documentation for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftTransfer","url":"/constructor/inputInvoiceStarGiftTransfer/"}]
layout: layout.njk
---

# inputInvoiceStarGiftTransfer

Used to [pay to transfer a collectible gift to another peer](/api/gifts/#transferring-collectible-gifts), see the [gifts »](/api/gifts/#transferring-collectible-gifts) documentation for more info.

```
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>The identifier of the received gift</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The destination peer</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
