---
title: "Messages.RecentStickers"
original: "https://core.telegram.org/type/messages.RecentStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.RecentStickers","url":"/type/messages.RecentStickers/"}]
layout: layout.njk
---

# Messages.RecentStickers

Recent stickers

```
messages.recentStickersNotModified#b17f890 = messages.RecentStickers;
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;

---functions---

messages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.recentStickersNotModified">messages.recentStickersNotModified</a></td><td>No new recent sticker was found</td></tr><tr><td><a href="/constructor/messages.recentStickers">messages.recentStickers</a></td><td>Recently used stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getRecentStickers">messages.getRecentStickers</a></td><td>Get recent stickers</td></tr></tbody></table>
