---
title: "account.updateBusinessIntro"
original: "https://core.telegram.org/method/account.updateBusinessIntro"
section: ref
description: "Set or remove the Telegram Business introduction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBusinessIntro","url":"/method/account.updateBusinessIntro/"}]
layout: layout.njk
---

# account.updateBusinessIntro

Set or remove the [Telegram Business introduction »](/api/business/#business-introduction).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessIntro#a614d034 flags:# intro:flags.0?InputBusinessIntro = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>intro</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputBusinessIntro">InputBusinessIntro</a></td><td>Telegram Business introduction, to remove it call the method without setting this flag.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
