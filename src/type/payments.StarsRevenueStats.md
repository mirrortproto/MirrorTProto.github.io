---
title: "payments.StarsRevenueStats"
original: "https://core.telegram.org/type/payments.StarsRevenueStats"
section: ref
description: "Star revenue statistics, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarsRevenueStats","url":"/type/payments.StarsRevenueStats/"}]
layout: layout.njk
---

# payments.StarsRevenueStats

[Star revenue statistics, see here »](/api/stars/) for more info.

Note that all balances and currency amounts and graph values are in Stars.

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;

---functions---

payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsRevenueStats">payments.starsRevenueStats</a></td><td><a href="/api/stars">Star revenue statistics, see here »</a> for more info.<br><br>Note that all balances and currency amounts and graph values are in Stars.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsRevenueStats">payments.getStarsRevenueStats</a></td><td>Get <a href="/api/stars">Telegram Star revenue statistics »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
