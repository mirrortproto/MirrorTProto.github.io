---
title: "Payments.ValidatedRequestedInfo"
original: "https://core.telegram.org/type/payments.ValidatedRequestedInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.ValidatedRequestedInfo","url":"/type/payments.ValidatedRequestedInfo/"}]
layout: layout.njk
---

# Payments.ValidatedRequestedInfo

Validated requested info

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;

---functions---

payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.validatedRequestedInfo">payments.validatedRequestedInfo</a></td><td>Validated user-provided info</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.validateRequestedInfo">payments.validateRequestedInfo</a></td><td>Submit requested order information for validation</td></tr></tbody></table>
