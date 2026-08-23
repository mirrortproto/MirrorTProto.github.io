---
title: "payments.StarsRevenueWithdrawalUrl"
original: "https://core.telegram.org/type/payments.StarsRevenueWithdrawalUrl"
section: ref
description: "Contains the URL to use to withdraw Telegram Star revenue."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarsRevenueWithdrawalUrl","url":"/type/payments.StarsRevenueWithdrawalUrl/"}]
layout: layout.njk
---

# payments.StarsRevenueWithdrawalUrl

Contains the URL to use to [withdraw Telegram Star revenue](/api/stars/#withdrawing-revenue).

```
payments.starsRevenueWithdrawalUrl#1dab80b7 url:string = payments.StarsRevenueWithdrawalUrl;

---functions---

payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsRevenueWithdrawalUrl">payments.starsRevenueWithdrawalUrl</a></td><td>Contains the URL to use to <a href="/api/stars#withdrawing-revenue">withdraw Telegram Star revenue</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsRevenueWithdrawalUrl">payments.getStarsRevenueWithdrawalUrl</a></td><td>Withdraw funds from a channel or bot's <a href="/api/stars#withdrawing-revenue">star balance »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
