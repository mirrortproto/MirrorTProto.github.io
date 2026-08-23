---
title: "StarRefProgram"
original: "https://core.telegram.org/type/StarRefProgram"
section: ref
description: "Indo about an affiliate program offered by a bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarRefProgram","url":"/type/StarRefProgram/"}]
layout: layout.njk
---

# StarRefProgram

Indo about an [affiliate program offered by a bot](/api/bots/referrals/)

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;

---functions---

bots.updateStarRefProgram#778b5ab3 flags:# bot:InputUser commission_permille:int duration_months:flags.0?int = StarRefProgram;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starRefProgram">starRefProgram</a></td><td>Info about an <a href="/api/bots/referrals">affiliate program offered by a bot</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.updateStarRefProgram">bots.updateStarRefProgram</a></td><td>Create, edit or delete the <a href="/api/bots/referrals">affiliate program</a> of a bot we own</td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
