---
title: "inputInvoiceStarGiftResale"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftResale"
section: ref
description: "Used to buy a collectible gift currently up on resale, see here for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftResale","url":"/constructor/inputInvoiceStarGiftResale/"}]
layout: layout.njk
---

# inputInvoiceStarGiftResale

Used to buy a [collectible gift](/api/gifts/#collectible-gifts) currently up on resale, see [here](/api/gifts/#reselling-collectible-gifts) for more info on the full flow.

```
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Buy the gift using TON.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Slug of the gift to buy.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The receiver of the gift.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
