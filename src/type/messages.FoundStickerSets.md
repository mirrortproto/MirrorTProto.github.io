---
title: "Messages.FoundStickerSets"
original: "https://core.telegram.org/type/messages.FoundStickerSets"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FoundStickerSets","url":"/type/messages.FoundStickerSets/"}]
layout: layout.njk
---

# Messages.FoundStickerSets

Found stickersets

```
messages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;

---functions---

messages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
messages.searchEmojiStickerSets#92b4494c flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickerSetsNotModified">messages.foundStickerSetsNotModified</a></td><td>No further results were found</td></tr><tr><td><a href="/constructor/messages.foundStickerSets">messages.foundStickerSets</a></td><td>Found stickersets</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickerSets">messages.searchStickerSets</a></td><td>Search for stickersets</td></tr><tr><td><a href="/method/messages.searchEmojiStickerSets">messages.searchEmojiStickerSets</a></td><td>Search for <a href="/api/custom-emoji">custom emoji stickersets »</a></td></tr></tbody></table>
