---
title: "messages.EmojiGroups"
original: "https://core.telegram.org/type/messages.EmojiGroups"
section: ref
description: "Represents a list of emoji categories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.EmojiGroups","url":"/type/messages.EmojiGroups/"}]
layout: layout.njk
---

# messages.EmojiGroups

Represents a list of [emoji categories](/api/emoji-categories/).

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;

---functions---

messages.getEmojiGroups#7488ce5b hash:int = messages.EmojiGroups;
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.emojiGroupsNotModified">messages.emojiGroupsNotModified</a></td><td>The list of <a href="/api/emoji-categories">emoji categories</a> hasn't changed.</td></tr><tr><td><a href="/constructor/messages.emojiGroups">messages.emojiGroups</a></td><td>Represents a list of <a href="/api/emoji-categories">emoji categories</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiGroups">messages.getEmojiGroups</a></td><td>Represents a list of <a href="/api/emoji-categories">emoji categories</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStatusGroups">messages.getEmojiStatusGroups</a></td><td>Represents a list of <a href="/api/emoji-categories">emoji categories</a>, to be used when selecting custom emojis to set as <a href="/api">custom emoji status</a>.</td></tr><tr><td><a href="/method/messages.getEmojiProfilePhotoGroups">messages.getEmojiProfilePhotoGroups</a></td><td>Represents a list of <a href="/api/emoji-categories">emoji categories</a>, to be used when selecting custom emojis to set as <a href="/api/files#sticker-profile-pictures">profile picture</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStickerGroups">messages.getEmojiStickerGroups</a></td><td>Represents a list of <a href="/api/emoji-categories">emoji categories</a>, to be used when choosing a sticker.</td></tr></tbody></table>

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
