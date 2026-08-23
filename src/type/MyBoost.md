---
title: "MyBoost"
original: "https://core.telegram.org/type/MyBoost"
section: ref
description: "Contains information about a single boost slot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MyBoost","url":"/type/MyBoost/"}]
layout: layout.njk
---

# MyBoost

Contains information about a single [boost slot »](/api/boost/).

```
myBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/myBoost">myBoost</a></td><td>Contains information about a single <a href="/api/boost">boost slot »</a>.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
