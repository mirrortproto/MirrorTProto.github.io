---
title: "messages.getEmojiProfilePhotoGroups"
original: "https://core.telegram.org/method/messages.getEmojiProfilePhotoGroups"
section: ref
description: "Represents a list of emoji categories, to be used when selecting custom emojis to set as profile picture."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiProfilePhotoGroups","url":"/method/messages.getEmojiProfilePhotoGroups/"}]
layout: layout.njk
---

# messages.getEmojiProfilePhotoGroups

Represents a list of [emoji categories](/api/emoji-categories/), to be used when selecting custom emojis to set as [profile picture](/api/files/#sticker-profile-pictures).

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;
---functions---
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.EmojiGroups](/type/messages.EmojiGroups/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
