---
title: "payments.paymentForm"
original: "https://core.telegram.org/constructor/payments.paymentForm"
section: ref
description: "How to login to a user's account if they have enabled 2FA, how to change password."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.paymentForm","url":"/constructor/payments.paymentForm/"}]
layout: layout.njk
---

# payments.paymentForm

Payment form

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_save_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Whether the user can choose to save credentials.</td></tr><tr><td><strong>password_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Indicates that the user can save payment credentials, but only after setting up a <a href="/api/srp">2FA password</a> (currently the account doesn't have a <a href="/api/srp">2FA password</a>)</td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Form ID</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Bot ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Form title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/WebDocument">WebDocument</a></td><td>Product photo</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Invoice</td></tr><tr><td><strong>provider_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Payment provider ID.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Payment form URL</td></tr><tr><td><strong>native_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Payment provider name.<br>One of the following:<br>- <code>stripe</code></td></tr><tr><td><strong>native_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/DataJSON">DataJSON</a></td><td>Contains information about the payment provider, if available, to support it natively without the need for opening the URL.<br>A JSON object that can contain the following fields:<br><br>- <code>apple_pay_merchant_id</code>: Apple Pay merchant ID<br>- <code>google_pay_public_key</code>: Google Pay public key<br>- <code>need_country</code>: True, if the user country must be provided,<br>- <code>need_zip</code>: True, if the user ZIP/postal code must be provided,<br>- <code>need_cardholder_name</code>: True, if the cardholder name must be provided<br></td></tr><tr><td><strong>additional_methods</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PaymentFormMethod">PaymentFormMethod</a>&gt;</td><td>Additional payment methods</td></tr><tr><td><strong>saved_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo">PaymentRequestedInfo</a></td><td>Saved server-side order information</td></tr><tr><td><strong>saved_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PaymentSavedCredentials">PaymentSavedCredentials</a>&gt;</td><td>Contains information about saved card credentials</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Users</td></tr></tbody></table>

### Type

[payments.PaymentForm](/type/payments.PaymentForm/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
