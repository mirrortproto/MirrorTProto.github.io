---
title: "Payments.SuggestedStarRefBots"
original: "https://core.telegram.org/type/payments.SuggestedStarRefBots"
section: ref
description: "A list of suggested mini apps with available affiliate programs"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.SuggestedStarRefBots","url":"/type/payments.SuggestedStarRefBots/"}]
layout: layout.njk
---

# Payments.SuggestedStarRefBots

A list of suggested [mini apps](/api/bots/webapps/) with available [affiliate programs](/api/bots/referrals/)

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;

---functions---

payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.suggestedStarRefBots">payments.suggestedStarRefBots</a></td><td>A list of suggested <a href="/api/bots/webapps">mini apps</a> with available <a href="/api/bots/referrals">affiliate programs</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getSuggestedStarRefBots">payments.getSuggestedStarRefBots</a></td><td>Obtain a list of suggested <a href="/api/bots/webapps">mini apps</a> with available <a href="/api/bots/referrals">affiliate programs</a><br><br><code>order_by_revenue</code> and <code>order_by_date</code> are mutually exclusive: if neither is set, results are sorted by profitability.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
