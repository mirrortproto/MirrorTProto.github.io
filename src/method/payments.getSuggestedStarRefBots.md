---
title: "payments.getSuggestedStarRefBots"
original: "https://core.telegram.org/method/payments.getSuggestedStarRefBots"
section: ref
description: "Obtain a list of suggested mini apps with available affiliate programs"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getSuggestedStarRefBots","url":"/method/payments.getSuggestedStarRefBots/"}]
layout: layout.njk
---

# payments.getSuggestedStarRefBots

Obtain a list of suggested [mini apps](/api/bots/webapps/) with available [affiliate programs](/api/bots/referrals/)

`order_by_revenue` and `order_by_date` are mutually exclusive: if neither is set, results are sorted by profitability.

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;
---functions---
payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>order_by_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, orders results by the expected revenue</td></tr><tr><td><strong>order_by_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>If set, orders results by the creation date of the affiliate program</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer that will become the affiliate: star commissions will be transferred to this peer's star balance.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Offset for pagination, taken from <a href="/constructor/payments.suggestedStarRefBots">payments.suggestedStarRefBots</a>.<code>next_offset</code>, initially empty.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/)

A list of suggested [mini apps](/api/bots/webapps/) with available [affiliate programs](/api/bots/referrals/)

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
