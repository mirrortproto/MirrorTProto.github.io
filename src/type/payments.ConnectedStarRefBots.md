---
title: "Payments.ConnectedStarRefBots"
original: "https://core.telegram.org/type/payments.ConnectedStarRefBots"
section: ref
description: "Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.ConnectedStarRefBots","url":"/type/payments.ConnectedStarRefBots/"}]
layout: layout.njk
---

# Payments.ConnectedStarRefBots

Active [affiliations](/api/bots/referrals/#becoming-an-affiliate)

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;

---functions---

payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.editConnectedStarRefBot#e4fca4a3 flags:# revoked:flags.0?true peer:InputPeer link:string = payments.ConnectedStarRefBots;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.connectedStarRefBots">payments.connectedStarRefBots</a></td><td>Active <a href="/api/bots/referrals#becoming-an-affiliate">affiliations</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getConnectedStarRefBots">payments.getConnectedStarRefBots</a></td><td>Fetch all affiliations we have created for a certain peer</td></tr><tr><td><a href="/method/payments.getConnectedStarRefBot">payments.getConnectedStarRefBot</a></td><td>Fetch info about a specific <a href="/api/bots/referrals">bot affiliation »</a></td></tr><tr><td><a href="/method/payments.connectStarRefBot">payments.connectStarRefBot</a></td><td>Join a bot's <a href="/api/bots/referrals#becoming-an-affiliate">affiliate program, becoming an affiliate »</a></td></tr><tr><td><a href="/method/payments.editConnectedStarRefBot">payments.editConnectedStarRefBot</a></td><td>Leave a bot's <a href="/api/bots/referrals#becoming-an-affiliate">affiliate program »</a></td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
