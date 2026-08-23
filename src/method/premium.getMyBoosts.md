---
title: "premium.getMyBoosts"
original: "https://core.telegram.org/method/premium.getMyBoosts"
section: ref
description: "Obtain which peers are we currently boosting, and how many boost slots we have left."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getMyBoosts","url":"/method/premium.getMyBoosts/"}]
layout: layout.njk
---

# premium.getMyBoosts

Obtain which peers are we currently [boosting](/api/boost/), and how many [boost slots](/api/boost/) we have left.

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
---functions---
premium.getMyBoosts#be77b4a = premium.MyBoosts;
```

### Parameters

This constructor does not require any parameters.

### Result

[premium.MyBoosts](/type/premium.MyBoosts/)

### Only users can use this method

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
