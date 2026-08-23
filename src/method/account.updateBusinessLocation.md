---
title: "account.updateBusinessLocation"
original: "https://core.telegram.org/method/account.updateBusinessLocation"
section: ref
description: "Businesses » may advertise their location using this method, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBusinessLocation","url":"/method/account.updateBusinessLocation/"}]
layout: layout.njk
---

# account.updateBusinessLocation

[Businesses »](/api/business/#location) may advertise their location using this method, see [here »](/api/business/#location) for more info.

To remove business location information invoke the method without setting any of the parameters.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessLocation#9e6b131a flags:# geo_point:flags.1?InputGeoPoint address:flags.0?string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Optional, contains a set of geographical coordinates.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Mandatory when setting/updating the location, contains a textual description of the address (max 96 UTF-8 chars).</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
