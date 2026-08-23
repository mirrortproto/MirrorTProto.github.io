---
title: "PrepaidGiveaway"
original: "https://core.telegram.org/type/PrepaidGiveaway"
section: ref
description: "Contains info about a prepaid giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PrepaidGiveaway","url":"/type/PrepaidGiveaway/"}]
layout: layout.njk
---

# PrepaidGiveaway

Contains info about a [prepaid giveaway »](/api/giveaways/).

```
prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;
prepaidStarsGiveaway#9a9d77e0 id:long stars:long quantity:int boosts:int date:int = PrepaidGiveaway;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/prepaidGiveaway">prepaidGiveaway</a></td><td>Contains info about a <a href="/api/giveaways">prepaid giveaway »</a>.</td></tr><tr><td><a href="/constructor/prepaidStarsGiveaway">prepaidStarsGiveaway</a></td><td>Contains info about a <a href="/api/giveaways#star-giveaways">prepaid Telegram Star giveaway »</a>.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
