---
title: "messages.searchStickers"
original: "https://core.telegram.org/method/messages.searchStickers"
section: ref
description: "Search for stickers using AI-powered keyword search"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchStickers","url":"/method/messages.searchStickers/"}]
layout: layout.njk
---

# messages.searchStickers

Search for stickers using AI-powered keyword search

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;
---functions---
messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, returns <a href="/api/custom-emoji">custom emoji stickers</a></td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The search term</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Space-separated list of emojis to search for</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>List of possible IETF language tags of the user's input language; may be empty if unknown</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offset for pagination</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.<br>The hash may be generated locally by using the <code>id</code>s of the returned or stored sticker <a href="/constructor/document">document</a>s.</td></tr></tbody></table>

### Result

[messages.FoundStickers](/type/messages.FoundStickers/)

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [document](/constructor/document/)

Document
