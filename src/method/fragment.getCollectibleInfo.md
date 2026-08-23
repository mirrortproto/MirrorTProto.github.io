---
title: "fragment.getCollectibleInfo"
original: "https://core.telegram.org/method/fragment.getCollectibleInfo"
section: ref
description: "Fetch information about a fragment collectible, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"fragment.getCollectibleInfo","url":"/method/fragment.getCollectibleInfo/"}]
layout: layout.njk
---

# fragment.getCollectibleInfo

Fetch information about a [fragment collectible, see here »](/api/fragment/#fetching-info-about-fragment-collectibles) for more info on the full flow.

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;
---functions---
fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>collectible</strong></td><td style="text-align: center;"><a href="/type/InputCollectible">InputCollectible</a></td><td>Collectible to fetch info about.</td></tr></tbody></table>

### Result

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>COLLECTIBLE_INVALID</td><td>The specified collectible is invalid.</td></tr><tr><td>400</td><td>COLLECTIBLE_NOT_FOUND</td><td>The specified collectible could not be found.</td></tr></tbody></table>

### Related pages

#### [Fragment collectibles](/api/fragment/)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
