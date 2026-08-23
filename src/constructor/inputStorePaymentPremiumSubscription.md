---
title: "inputStorePaymentPremiumSubscription"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumSubscription"
section: ref
description: "Info about a Telegram Premium purchase"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentPremiumSubscription","url":"/constructor/inputStorePaymentPremiumSubscription/"}]
layout: layout.njk
---

# inputStorePaymentPremiumSubscription

Info about a Telegram Premium purchase

```
inputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Pass true if this is a restore of a Telegram Premium purchase; only for the App Store</td></tr><tr><td><strong>upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Pass true if this is an upgrade from a monthly subscription to a yearly subscription; only for App Store</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)
