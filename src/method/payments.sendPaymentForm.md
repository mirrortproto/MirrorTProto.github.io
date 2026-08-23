---
title: "payments.sendPaymentForm"
original: "https://core.telegram.org/method/payments.sendPaymentForm"
section: ref
description: "Send compiled payment form"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.sendPaymentForm","url":"/method/payments.sendPaymentForm/"}]
layout: layout.njk
---

# payments.sendPaymentForm

Send compiled payment form

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;
---functions---
payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Form ID</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/InputInvoice">InputInvoice</a></td><td>Invoice</td></tr><tr><td><strong>requested_info_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>ID of saved and validated <a href="/constructor/payments.validatedRequestedInfo">order info</a></td></tr><tr><td><strong>shipping_option_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Chosen shipping option ID</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/InputPaymentCredentials">InputPaymentCredentials</a></td><td>Payment credentials</td></tr><tr><td><strong>tip_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Tip, in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Result

[payments.PaymentResult](/type/payments.PaymentResult/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FORM_UNSUPPORTED</td><td>Please update your client.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>The specified invoice is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PAYMENT_CREDENTIALS_INVALID</td><td>The specified payment credentials are invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TMP_PASSWORD_INVALID</td><td>The passed tmp_password is invalid.</td></tr></tbody></table>

### Related pages

#### [payments.ValidatedRequestedInfo](/constructor/payments.validatedRequestedInfo/)

Validated user-provided info

#### [Bot Payments API](https://core.telegram.org/bots/payments)
