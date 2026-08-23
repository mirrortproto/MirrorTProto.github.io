---
title: "StarsGiveawayOption"
original: "https://core.telegram.org/type/StarsGiveawayOption"
section: ref
description: "Contains info about a Telegram Star giveaway option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsGiveawayOption","url":"/type/StarsGiveawayOption/"}]
layout: layout.njk
---

# StarsGiveawayOption

Contains info about a [Telegram Star giveaway](/api/giveaways/#star-giveaways) option.

```
starsGiveawayOption#94ce852a flags:# extended:flags.0?true default:flags.1?true stars:long yearly_boosts:int store_product:flags.2?string currency:string amount:long winners:Vector<StarsGiveawayWinnersOption> = StarsGiveawayOption;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsGiveawayOption">starsGiveawayOption</a></td><td>Contains info about a <a href="/api/giveaways#star-giveaways">Telegram Star giveaway</a> option.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
