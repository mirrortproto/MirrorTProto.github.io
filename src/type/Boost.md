---
title: "Boost"
original: "https://core.telegram.org/type/Boost"
section: ref
description: "Info about one or more boosts applied by a specific user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Boost","url":"/type/Boost/"}]
layout: layout.njk
---

# Boost

Info about one or more [boosts](/api/boost/) applied by a specific user.

```
boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/boost">boost</a></td><td>Info about one or more <a href="/api/boost">boosts</a> applied by a specific user.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
