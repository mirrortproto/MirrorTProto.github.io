---
title: "fragment.CollectibleInfo"
original: "https://core.telegram.org/type/fragment.CollectibleInfo"
section: ref
description: "Info about a fragment collectible."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"fragment.CollectibleInfo","url":"/type/fragment.CollectibleInfo/"}]
layout: layout.njk
---

# fragment.CollectibleInfo

Info about a [fragment collectible](/api/fragment/).

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;

---functions---

fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/fragment.collectibleInfo">fragment.collectibleInfo</a></td><td>Info about a <a href="/api/fragment">fragment collectible</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/fragment.getCollectibleInfo">fragment.getCollectibleInfo</a></td><td>Fetch information about a <a href="/api/fragment#fetching-info-about-fragment-collectibles">fragment collectible, see here »</a> for more info on the full flow.</td></tr></tbody></table>

### Related pages

#### [Fragment collectibles](/api/fragment/)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
