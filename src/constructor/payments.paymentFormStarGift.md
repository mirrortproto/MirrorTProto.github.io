---
title: "payments.paymentFormStarGift"
original: "https://core.telegram.org/constructor/payments.paymentFormStarGift"
section: ref
description: "Represents a payment form for a gift, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.paymentFormStarGift","url":"/constructor/payments.paymentFormStarGift/"}]
layout: layout.njk
---

# payments.paymentFormStarGift

Represents a payment form for a [gift, see here »](/api/gifts/) for more info.

```
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Form ID.</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Invoice</td></tr></tbody></table>

### Type

[payments.PaymentForm](/type/payments.PaymentForm/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
