---
title: "Premium.MyBoosts"
original: "https://core.telegram.org/type/premium.MyBoosts"
section: ref
description: "A list of peers we are currently boosting, and how many boost slots we have left."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.MyBoosts","url":"/type/premium.MyBoosts/"}]
layout: layout.njk
---

# Premium.MyBoosts

A list of peers we are currently [boosting](/api/boost/), and how many [boost slots](/api/boost/) we have left.

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;

---functions---

premium.getMyBoosts#be77b4a = premium.MyBoosts;
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.myBoosts">premium.myBoosts</a></td><td>A list of peers we are currently <a href="/api/boost">boosting</a>, and how many <a href="/api/boost">boost slots</a> we have left.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getMyBoosts">premium.getMyBoosts</a></td><td>Obtain which peers are we currently <a href="/api/boost">boosting</a>, and how many <a href="/api/boost">boost slots</a> we have left.</td></tr><tr><td><a href="/method/premium.applyBoost">premium.applyBoost</a></td><td>Apply one or more <a href="/api/boost">boosts »</a> to a peer.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
