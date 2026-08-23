---
title: "premium.myBoosts"
original: "https://core.telegram.org/constructor/premium.myBoosts"
section: ref
description: "A list of peers we are currently boosting, and how many boost slots we have left."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"premium.myBoosts","url":"/constructor/premium.myBoosts/"}]
layout: layout.njk
---

# premium.myBoosts

A list of peers we are currently [boosting](/api/boost/), and how many [boost slots](/api/boost/) we have left.

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>my_boosts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MyBoost">MyBoost</a>&gt;</td><td>Info about boosted peers and remaining boost slots.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Referenced chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Referenced users</td></tr></tbody></table>

### Type

[premium.MyBoosts](/type/premium.MyBoosts/)

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
