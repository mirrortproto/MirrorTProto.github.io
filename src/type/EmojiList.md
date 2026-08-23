---
title: "EmojiList"
original: "https://core.telegram.org/type/EmojiList"
section: ref
description: "Represents a list of custom emojis."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiList","url":"/type/EmojiList/"}]
layout: layout.njk
---

# EmojiList

Represents a list of [custom emojis](/api/custom-emoji/).

```
emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

account.getDefaultProfilePhotoEmojis#e2750328 hash:long = EmojiList;
account.getDefaultGroupPhotoEmojis#915860ae hash:long = EmojiList;
account.getDefaultBackgroundEmojis#a60ab9ce hash:long = EmojiList;
account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;

messages.searchCustomEmoji#2c11c0d7 emoticon:string hash:long = EmojiList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiListNotModified">emojiListNotModified</a></td><td>The list of <a href="/api/custom-emoji">custom emojis</a> hasn't changed.</td></tr><tr><td><a href="/constructor/emojiList">emojiList</a></td><td>Represents a list of <a href="/api/custom-emoji">custom emojis</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getDefaultProfilePhotoEmojis">account.getDefaultProfilePhotoEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji">custom emoji stickers</a> that can be <a href="/api/files#sticker-profile-pictures">used as profile picture</a></td></tr><tr><td><a href="/method/account.getDefaultGroupPhotoEmojis">account.getDefaultGroupPhotoEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji">custom emoji stickers</a> that can be <a href="/api/files#sticker-profile-pictures">used as group picture</a></td></tr><tr><td><a href="/method/account.getDefaultBackgroundEmojis">account.getDefaultBackgroundEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji">custom emoji stickers</a> that can be used in an <a href="/api/colors">accent color pattern</a>.</td></tr><tr><td><a href="/method/account.getChannelRestrictedStatusEmojis">account.getChannelRestrictedStatusEmojis</a></td><td>Returns fetch the full list of <a href="/api/custom-emoji">custom emoji IDs »</a> that cannot be used in <a href="/api/emoji-status">channel emoji statuses »</a>.</td></tr><tr><td><a href="/method/messages.searchCustomEmoji">messages.searchCustomEmoji</a></td><td>Look for <a href="/api/custom-emoji">custom emojis</a> associated to a UTF8 emoji</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
