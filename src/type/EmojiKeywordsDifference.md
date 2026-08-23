---
title: "EmojiKeywordsDifference"
original: "https://core.telegram.org/type/EmojiKeywordsDifference"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiKeywordsDifference","url":"/type/EmojiKeywordsDifference/"}]
layout: layout.njk
---

# EmojiKeywordsDifference

New emoji keywords

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;

---functions---

messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiKeywordsDifference">emojiKeywordsDifference</a></td><td>Changes to emoji keywords</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiKeywords">messages.getEmojiKeywords</a></td><td>Get localized <a href="/api/custom-emoji#emoji-keywords">emoji keywords »</a>.</td></tr><tr><td><a href="/method/messages.getEmojiKeywordsDifference">messages.getEmojiKeywordsDifference</a></td><td>Get changed <a href="/api/custom-emoji#emoji-keywords">emoji keywords »</a>.</td></tr></tbody></table>
