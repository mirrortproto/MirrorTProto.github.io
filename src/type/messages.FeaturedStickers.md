---
title: "Messages.FeaturedStickers"
original: "https://core.telegram.org/type/messages.FeaturedStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FeaturedStickers","url":"/type/messages.FeaturedStickers/"}]
layout: layout.njk
---

# Messages.FeaturedStickers

Featured stickers

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;

---functions---

messages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;
messages.getOldFeaturedStickers#7ed094a1 offset:int limit:int hash:long = messages.FeaturedStickers;
messages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.featuredStickersNotModified">messages.featuredStickersNotModified</a></td><td>Featured stickers haven't changed</td></tr><tr><td><a href="/constructor/messages.featuredStickers">messages.featuredStickers</a></td><td>Featured stickersets</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getFeaturedStickers">messages.getFeaturedStickers</a></td><td>Get featured stickers</td></tr><tr><td><a href="/method/messages.getOldFeaturedStickers">messages.getOldFeaturedStickers</a></td><td>Method for fetching previously featured stickers</td></tr><tr><td><a href="/method/messages.getFeaturedEmojiStickers">messages.getFeaturedEmojiStickers</a></td><td>Gets featured custom emoji stickersets.</td></tr></tbody></table>
