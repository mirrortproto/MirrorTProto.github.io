---
title: "account.getDefaultEmojiStatuses"
original: "https://core.telegram.org/method/account.getDefaultEmojiStatuses"
section: ref
description: "Get a list of default suggested emoji statuses"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getDefaultEmojiStatuses","url":"/method/account.getDefaultEmojiStatuses/"}]
layout: layout.njk
---

# account.getDefaultEmojiStatuses

Get a list of default suggested [emoji statuses](/api/emoji-status/)

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;
---functions---
account.getDefaultEmojiStatuses#d6753386 hash:long = account.EmojiStatuses;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[account.EmojiStatuses](/type/account.EmojiStatuses/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
