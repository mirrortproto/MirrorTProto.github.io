---
title: "messages.getEmojiKeywords"
original: "https://core.telegram.org/method/messages.getEmojiKeywords"
section: ref
description: "Get localized emoji keywords »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiKeywords","url":"/method/messages.getEmojiKeywords/"}]
layout: layout.njk
---

# messages.getEmojiKeywords

Get localized [emoji keywords »](/api/custom-emoji/#emoji-keywords).

```
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Language code</td></tr></tbody></table>

### Result

[EmojiKeywordsDifference](/type/EmojiKeywordsDifference/)

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
