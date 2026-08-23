---
title: "Messages.FoundStickers"
original: "https://core.telegram.org/type/messages.FoundStickers"
section: ref
description: "Telegram clients support displaying static and animated stickers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FoundStickers","url":"/type/messages.FoundStickers/"}]
layout: layout.njk
---

# Messages.FoundStickers

Found [stickers](/api/stickers/)

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;

---functions---

messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickersNotModified">messages.foundStickersNotModified</a></td><td>No new stickers were found for the specified query</td></tr><tr><td><a href="/constructor/messages.foundStickers">messages.foundStickers</a></td><td>Found stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickers">messages.searchStickers</a></td><td>Search for stickers using AI-powered keyword search</td></tr></tbody></table>

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
