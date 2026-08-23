---
title: "StickerSetCovered"
original: "https://core.telegram.org/type/StickerSetCovered"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StickerSetCovered","url":"/type/StickerSetCovered/"}]
layout: layout.njk
---

# StickerSetCovered

Stickerset preview

```
stickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;
stickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
stickerSetNoCovered#77b15d1c set:StickerSet = StickerSetCovered;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stickerSetCovered">stickerSetCovered</a></td><td>Stickerset with a single sticker as preview</td></tr><tr><td><a href="/constructor/stickerSetMultiCovered">stickerSetMultiCovered</a></td><td>Stickerset, with multiple stickers as preview</td></tr><tr><td><a href="/constructor/stickerSetFullCovered">stickerSetFullCovered</a></td><td>Stickerset preview with all stickers of the stickerset included.<br>Currently used only for <a href="/api/custom-emoji">custom emoji stickersets</a>, to avoid a further call to <a href="/method/messages.getStickerSet">messages.getStickerSet</a>.</td></tr><tr><td><a href="/constructor/stickerSetNoCovered">stickerSetNoCovered</a></td><td>Just the stickerset information, with no previews.</td></tr></tbody></table>
