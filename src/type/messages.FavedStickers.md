---
title: "Messages.FavedStickers"
original: "https://core.telegram.org/type/messages.FavedStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FavedStickers","url":"/type/messages.FavedStickers/"}]
layout: layout.njk
---

# Messages.FavedStickers

Favorited stickers

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;

---functions---

messages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.favedStickersNotModified">messages.favedStickersNotModified</a></td><td>No new favorited stickers were found</td></tr><tr><td><a href="/constructor/messages.favedStickers">messages.favedStickers</a></td><td>Favorited stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getFavedStickers">messages.getFavedStickers</a></td><td>Get faved stickers</td></tr></tbody></table>
