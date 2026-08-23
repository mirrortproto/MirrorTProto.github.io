---
title: "account.getSavedMusicIds"
original: "https://core.telegram.org/method/account.getSavedMusicIds"
section: ref
description: "Fetch the full list of only the IDs of songs currently added to the profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getSavedMusicIds","url":"/method/account.getSavedMusicIds/"}]
layout: layout.njk
---

# account.getSavedMusicIds

Fetch the full list of only the IDs of [songs currently added to the profile, see here »](/api/profile/#music) for more info.

```
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
---functions---
account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Hash <a href="/api/offsets#hash-generation">generated »</a> from the previously returned list of IDs.</td></tr></tbody></table>

### Result

[account.SavedMusicIds](/type/account.SavedMusicIds/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
