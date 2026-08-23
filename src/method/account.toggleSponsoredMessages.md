---
title: "account.toggleSponsoredMessages"
original: "https://core.telegram.org/method/account.toggleSponsoredMessages"
section: ref
description: "Disable or re-enable Telegram ads for the current Premium account."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.toggleSponsoredMessages","url":"/method/account.toggleSponsoredMessages/"}]
layout: layout.njk
---

# account.toggleSponsoredMessages

Disable or re-enable Telegram ads for the current [Premium](/api/premium/) account.

Useful for business owners that may want to launch and view their own Telegram ads via the [Telegram ad platform »](https://ads.telegram.org).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleSponsoredMessages#b9d9a38d enabled:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Enable or disable ads.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
