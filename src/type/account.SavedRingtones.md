---
title: "account.SavedRingtones"
original: "https://core.telegram.org/type/account.SavedRingtones"
section: ref
description: "Contains a list of saved notification sounds"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SavedRingtones","url":"/type/account.SavedRingtones/"}]
layout: layout.njk
---

# account.SavedRingtones

Contains a list of saved notification sounds

```
account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;

---functions---

account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedRingtonesNotModified">account.savedRingtonesNotModified</a></td><td>The notification sound list hasn't changed.</td></tr><tr><td><a href="/constructor/account.savedRingtones">account.savedRingtones</a></td><td>A list of saved notification sounds</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getSavedRingtones">account.getSavedRingtones</a></td><td>Fetch saved notification sounds</td></tr></tbody></table>
