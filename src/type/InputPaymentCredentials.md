---
title: "InputPaymentCredentials"
original: "https://core.telegram.org/type/InputPaymentCredentials"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPaymentCredentials","url":"/type/InputPaymentCredentials/"}]
layout: layout.njk
---

# InputPaymentCredentials

Payment credentials

```
inputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;
inputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsApplePay#aa1c39f payment_data:DataJSON = InputPaymentCredentials;
inputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPaymentCredentialsSaved">inputPaymentCredentialsSaved</a></td><td>Saved payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentials">inputPaymentCredentials</a></td><td>Payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsApplePay">inputPaymentCredentialsApplePay</a></td><td>Apple pay payment credentials</td></tr><tr><td><a href="/constructor/inputPaymentCredentialsGooglePay">inputPaymentCredentialsGooglePay</a></td><td>Google Pay payment credentials</td></tr></tbody></table>
