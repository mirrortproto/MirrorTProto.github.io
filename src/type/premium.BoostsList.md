---
title: "Premium.BoostsList"
original: "https://core.telegram.org/type/premium.BoostsList"
section: ref
description: "List of boosts that were applied to a peer by multiple users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.BoostsList","url":"/type/premium.BoostsList/"}]
layout: layout.njk
---

# Premium.BoostsList

List of [boosts](/api/boost/) that were applied to a peer by multiple users.

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;

---functions---

premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsList">premium.boostsList</a></td><td>List of <a href="/api/boost">boosts</a> that were applied to a peer by multiple users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsList">premium.getBoostsList</a></td><td>Obtains info about the boosts that were applied to a certain channel or supergroup (admins only)</td></tr><tr><td><a href="/method/premium.getUserBoosts">premium.getUserBoosts</a></td><td>Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
