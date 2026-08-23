---
title: "EmojiStatus"
original: "https://core.telegram.org/type/EmojiStatus"
section: ref
description: "Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiStatus","url":"/type/EmojiStatus/"}]
layout: layout.njk
---

# EmojiStatus

[Emoji status](/api/emoji-status/)

```
emojiStatusEmpty#2de11aae = EmojiStatus;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#7141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiStatusEmpty">emojiStatusEmpty</a></td><td>No emoji status is set</td></tr><tr><td><a href="/constructor/emojiStatus">emojiStatus</a></td><td>An <a href="/api/emoji-status">emoji status</a></td></tr><tr><td><a href="/constructor/emojiStatusCollectible">emojiStatusCollectible</a></td><td>An owned or <a href="/api/gifts#hosted-collectible-gifts">hosted collectible gift »</a> as emoji status.<br><br><strong>Cannot</strong> be passed to <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a>, must be converted to an <a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a> first before passing it to that method.</td></tr><tr><td><a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a></td><td>An owned or <a href="/api/gifts#hosted-collectible-gifts">hosted collectible gift »</a> as emoji status: can only be used in <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a>, is never returned by the API.<br><br>Note that once set, the status will be returned to users as a <a href="/constructor/emojiStatusCollectible">emojiStatusCollectible</a> constructor, instead (which <strong>cannot</strong> be passed to <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a>, and must be converted to an <a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a> first).</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
