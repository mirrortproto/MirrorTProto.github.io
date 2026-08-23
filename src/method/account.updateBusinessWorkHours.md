---
title: "account.updateBusinessWorkHours"
original: "https://core.telegram.org/method/account.updateBusinessWorkHours"
section: ref
description: "Specify a set of Telegram Business opening hours."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBusinessWorkHours","url":"/method/account.updateBusinessWorkHours/"}]
layout: layout.njk
---

# account.updateBusinessWorkHours

Specify a set of [Telegram Business opening hours](/api/business/#opening-hours).  
This info will be contained in [userFull](/constructor/userFull/).`business_work_hours`.

To remove all opening hours, invoke the method without setting the `business_work_hours` field.

Note that the opening hours specified by the user must be appropriately validated and transformed before invoking the method, as specified [here »](/api/business/#opening-hours).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessWorkHours#4b00e066 flags:# business_work_hours:flags.0?BusinessWorkHours = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>business_work_hours</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/BusinessWorkHours">BusinessWorkHours</a></td><td>Opening hours (optional, if not set removes all opening hours).</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_WORK_HOURS_EMPTY</td><td>No work hours were specified.</td></tr><tr><td>400</td><td>BUSINESS_WORK_HOURS_PERIOD_INVALID</td><td>The specified work hours are invalid, see <a href="/api/business#opening-hours">here&nbsp;»</a> for the exact requirements.</td></tr><tr><td>400</td><td>TIMEZONE_INVALID</td><td>The specified timezone does not exist.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
