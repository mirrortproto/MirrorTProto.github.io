---
title: "payments.StarsStatus"
original: "https://core.telegram.org/type/payments.StarsStatus"
section: ref
description: "Info about the current Telegram Star subscriptions, balance and transaction history »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarsStatus","url":"/type/payments.StarsStatus/"}]
layout: layout.njk
---

# payments.StarsStatus

Info about the current [Telegram Star subscriptions, balance and transaction history »](/api/stars/#balance-and-transaction-history).

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;

---functions---

payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
payments.getStarsSubscriptions#32512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsStatus">payments.starsStatus</a></td><td>Info about the current <a href="/api/stars#balance-and-transaction-history">Telegram Star subscriptions, balance and transaction history »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsStatus">payments.getStarsStatus</a></td><td>Get the current <a href="/api/stars">Telegram Stars balance</a> of the current account (with peer=<a href="/constructor/inputPeerSelf">inputPeerSelf</a>), or the stars balance of the bot or channel specified in <code>peer</code>.</td></tr><tr><td><a href="/method/payments.getStarsTransactions">payments.getStarsTransactions</a></td><td>Fetch <a href="/api/stars#balance-and-transaction-history">Telegram Stars transactions</a>.<br><br>The <code>inbound</code> and <code>outbound</code> flags are mutually exclusive: if none of the two are set, both incoming and outgoing transactions are fetched.</td></tr><tr><td><a href="/method/payments.getStarsTransactionsByID">payments.getStarsTransactionsByID</a></td><td>Obtain info about <a href="/api/stars#balance-and-transaction-history">Telegram Star transactions »</a> using specific transaction IDs.</td></tr><tr><td><a href="/method/payments.getStarsSubscriptions">payments.getStarsSubscriptions</a></td><td>Obtain a list of active, expired or cancelled <a href="/api/invites#paid-invite-links">Telegram Star subscriptions »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
