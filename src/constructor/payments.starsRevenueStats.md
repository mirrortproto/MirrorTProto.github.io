---
title: "payments.starsRevenueStats"
original: "https://core.telegram.org/constructor/payments.starsRevenueStats"
section: ref
description: "Star revenue statistics, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starsRevenueStats","url":"/constructor/payments.starsRevenueStats/"}]
layout: layout.njk
---

# payments.starsRevenueStats

[Star revenue statistics, see here »](/api/stars/) for more info.

Note that all balances and currency amounts and graph values are in Stars.

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>top_hours_graph</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/StatsGraph">StatsGraph</a></td><td>For ad revenue statistics, ad impressions graph</td></tr><tr><td><strong>revenue_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>Star revenue graph (number of earned stars)</td></tr><tr><td><strong>status</strong></td><td style="text-align: center;"><a href="/type/StarsRevenueStatus">StarsRevenueStatus</a></td><td>Current balance, current withdrawable balance and overall earned Telegram Stars</td></tr><tr><td><strong>usd_rate</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Current conversion rate of Telegram Stars to USD</td></tr></tbody></table>

### Type

[payments.StarsRevenueStats](/type/payments.StarsRevenueStats/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
