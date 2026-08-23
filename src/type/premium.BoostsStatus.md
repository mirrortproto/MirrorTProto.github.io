---
title: "Premium.BoostsStatus"
original: "https://core.telegram.org/type/premium.BoostsStatus"
section: ref
description: "Contains info about the current boost status of a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.BoostsStatus","url":"/type/premium.BoostsStatus/"}]
layout: layout.njk
---

# Premium.BoostsStatus

Contains info about the current [boost status](/api/boost/) of a peer.

```
premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;

---functions---

premium.getBoostsStatus#42f1f61 peer:InputPeer = premium.BoostsStatus;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsStatus">premium.boostsStatus</a></td><td>Contains info about the current <a href="/api/boost">boost status</a> of a peer.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsStatus">premium.getBoostsStatus</a></td><td>Gets the current <a href="/api/boost">number of boosts</a> of a channel/supergroup.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
