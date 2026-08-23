---
title: "Payments.PaymentForm"
original: "https://core.telegram.org/type/payments.PaymentForm"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.PaymentForm","url":"/type/payments.PaymentForm/"}]
layout: layout.njk
---

# Payments.PaymentForm

Payment form

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
payments.paymentFormStars#7bf6b15c flags:# form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice users:Vector<User> = payments.PaymentForm;
payments.paymentFormStarGift#b425cfe1 form_id:long invoice:Invoice = payments.PaymentForm;

---functions---

payments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.paymentForm">payments.paymentForm</a></td><td>Payment form</td></tr><tr><td><a href="/constructor/payments.paymentFormStars">payments.paymentFormStars</a></td><td>Represents a payment form, for payments to be using <a href="/api/stars">Telegram Stars, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/payments.paymentFormStarGift">payments.paymentFormStarGift</a></td><td>Represents a payment form for a <a href="/api/gifts">gift, see here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getPaymentForm">payments.getPaymentForm</a></td><td>Get a payment form</td></tr></tbody></table>
