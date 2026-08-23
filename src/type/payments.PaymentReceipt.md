---
title: "Payments.PaymentReceipt"
original: "https://core.telegram.org/type/payments.PaymentReceipt"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentReceipt","url":"/type/payments.PaymentReceipt/"}]
layout: layout.njk
---

# Payments.PaymentReceipt

Payment receipt

```
payments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;
payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;

---functions---

payments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentReceipt">payments.paymentReceipt</a></td><td>Receipt</td></tr><tr><td><a href="/constructor/payments.paymentReceiptStars">payments.paymentReceiptStars</a></td><td>Receipt for <a href="/api/stars">payment made using Telegram Stars</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentReceipt">payments.getPaymentReceipt</a></td><td>Get payment receipt</td></tr></tbody></table>
