---
title: "users.SavedMusic"
original: "https://core.telegram.org/type/users.SavedMusic"
section: ref
description: "List of songs (document.ids) currently pinned on a user's profile, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"users.SavedMusic","url":"/type/users.SavedMusic/"}]
layout: layout.njk
---

# users.SavedMusic

List of songs ([document](/constructor/document/).`id`s) currently pinned on a user's profile, see [here »](/api/profile/#music) for more info.

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;

---functions---

users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/users.savedMusicNotModified">users.savedMusicNotModified</a></td><td>This subset of the songs currently pinned on a user's profile hasn't changed, see <a href="/api/profile#music">here »</a> for more info.</td></tr><tr><td><a href="/constructor/users.savedMusic">users.savedMusic</a></td><td>List of songs currently pinned on a user's profile, see <a href="/api/profile#music">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/users.getSavedMusic">users.getSavedMusic</a></td><td>Get songs <a href="/api/profile#music">pinned to the user's profile, see here »</a> for more info.</td></tr><tr><td><a href="/method/users.getSavedMusicByID">users.getSavedMusicByID</a></td><td>Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile <a href="/api/profile#music">see here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [document](/constructor/document/)

Document

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
