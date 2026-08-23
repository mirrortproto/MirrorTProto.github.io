---
title: "premium.getUserBoosts"
original: "https://core.telegram.org/method/premium.getUserBoosts"
section: ref
description: "Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getUserBoosts","url":"/method/premium.getUserBoosts/"}]
layout: layout.njk
---

# premium.getUserBoosts

Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
---functions---
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The channel/supergroup</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The user</td></tr></tbody></table>

### Result

[premium.BoostsList](/type/premium.BoostsList/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
