---
title: "EmojiGroup"
original: "https://core.telegram.org/type/EmojiGroup"
section: ref
description: "Represents an emoji category."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiGroup","url":"/type/EmojiGroup/"}]
layout: layout.njk
---

# EmojiGroup

Represents an [emoji category](/api/emoji-categories/).

```
emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiGroup">emojiGroup</a></td><td>Represents an <a href="/api/emoji-categories">emoji category</a>.</td></tr><tr><td><a href="/constructor/emojiGroupGreeting">emojiGroupGreeting</a></td><td>Represents an <a href="/api/emoji-categories">emoji category</a>, that should be moved to the top of the list when choosing a sticker for a <a href="/api/business#business-introduction">business introduction</a></td></tr><tr><td><a href="/constructor/emojiGroupPremium">emojiGroupPremium</a></td><td>An <a href="/api/emoji-categories">emoji category</a>, used to select all <a href="/api/premium">Premium</a>-only stickers (i.e. those with a <a href="/api/stickers#premium-animated-sticker-effects">Premium effect »</a>)/<a href="/api/premium">Premium</a>-only <a href="/api/custom-emoji">custom emojis</a> (i.e. those where the <a href="/constructor/documentAttributeCustomEmoji">documentAttributeCustomEmoji</a>.<code>free</code> flag is <strong>not</strong> set)</td></tr></tbody></table>

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
