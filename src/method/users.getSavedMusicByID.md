---
title: "users.getSavedMusicByID"
original: "https://core.telegram.org/method/users.getSavedMusicByID"
section: ref
description: "Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.getSavedMusicByID","url":"/method/users.getSavedMusicByID/"}]
layout: layout.njk
---

# users.getSavedMusicByID

Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile [see here »](/api/profile/#music) for more info.

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
---functions---
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The ID of the user.</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDocument">InputDocument</a>&gt;</td><td>The songs (here, <code>file_reference</code> can be empty to refresh file references).</td></tr></tbody></table>

### Result

[users.SavedMusic](/type/users.SavedMusic/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
