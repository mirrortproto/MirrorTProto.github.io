---
title: "Payments.PaymentResult"
original: "https://core.telegram.org/type/payments.PaymentResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentResult","url":"/type/payments.PaymentResult/"}]
layout: layout.njk
---

# Payments.PaymentResult

Payment result

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;

---functions---

payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
payments.sendStarsForm#7998c914 form_id:long invoice:InputInvoice = payments.PaymentResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentResult">payments.paymentResult</a></td><td>Payment result</td></tr><tr><td><a href="/constructor/payments.paymentVerificationNeeded">payments.paymentVerificationNeeded</a></td><td>Payment was not successful, additional verification is needed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.sendPaymentForm">payments.sendPaymentForm</a></td><td>Send compiled payment form</td></tr><tr><td><a href="/method/payments.sendStarsForm">payments.sendStarsForm</a></td><td>Make a payment using <a href="/api/stars#using-stars">Telegram Stars, see here »</a> for more info.</td></tr></tbody></table>
