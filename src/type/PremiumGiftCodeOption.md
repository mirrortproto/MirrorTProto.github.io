---
title: "PremiumGiftCodeOption"
original: "https://core.telegram.org/type/PremiumGiftCodeOption"
section: ref
description: "Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PremiumGiftCodeOption","url":"/type/PremiumGiftCodeOption/"}]
layout: layout.njk
---

# PremiumGiftCodeOption

[Giveaway](/api/giveaways/) option.

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premiumGiftCodeOption">premiumGiftCodeOption</a></td><td>Contains info about a <a href="/api/giveaways">giveaway/gift</a> option.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
