---
title: "premium.applyBoost"
original: "https://core.telegram.org/method/premium.applyBoost"
section: ref
description: "Apply one or more boosts » to a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.applyBoost","url":"/method/premium.applyBoost/"}]
layout: layout.njk
---

# premium.applyBoost

Apply one or more [boosts »](/api/boost/) to a peer.

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
---functions---
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>slots</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Which <a href="/api/boost">boost slots</a> to assign to this peer.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer to boost.</td></tr></tbody></table>

### Result

[premium.MyBoosts](/type/premium.MyBoosts/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOOSTS_EMPTY</td><td>No boost slots were specified.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>SLOTS_EMPTY</td><td>The specified slot list is empty.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
