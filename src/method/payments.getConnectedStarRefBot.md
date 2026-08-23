---
title: "payments.getConnectedStarRefBot"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBot"
section: ref
description: "Fetch info about a specific bot affiliation »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getConnectedStarRefBot","url":"/method/payments.getConnectedStarRefBot/"}]
layout: layout.njk
---

# payments.getConnectedStarRefBot

Fetch info about a specific [bot affiliation »](/api/bots/referrals/)

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The affiliated peer</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot that offers the affiliate program</td></tr></tbody></table>

### Result

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
