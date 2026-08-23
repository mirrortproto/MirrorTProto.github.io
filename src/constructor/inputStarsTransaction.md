---
title: "inputStarsTransaction"
original: "https://core.telegram.org/constructor/inputStarsTransaction"
section: ref
description: "Used to fetch info about a Telegram Star transaction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStarsTransaction","url":"/constructor/inputStarsTransaction/"}]
layout: layout.njk
---

# inputStarsTransaction

Used to fetch info about a [Telegram Star transaction »](/api/stars/#balance-and-transaction-history).

```
inputStarsTransaction#206ae6d1 flags:# refund:flags.0?true id:string = InputStarsTransaction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>refund</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, fetches info about the refund transaction for this transaction.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Transaction ID.</td></tr></tbody></table>

### Type

[InputStarsTransaction](/type/InputStarsTransaction/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
