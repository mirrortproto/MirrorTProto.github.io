---
title: "Messages.AllStickers"
original: "https://core.telegram.org/type/messages.AllStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.AllStickers","url":"/type/messages.AllStickers/"}]
layout: layout.njk
---

# Messages.AllStickers

All stickers

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;

---functions---

messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
messages.getMaskStickers#640f82b8 hash:long = messages.AllStickers;
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.allStickersNotModified">messages.allStickersNotModified</a></td><td>Info about all installed stickers hasn't changed</td></tr><tr><td><a href="/constructor/messages.allStickers">messages.allStickers</a></td><td>Info about all installed stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAllStickers">messages.getAllStickers</a></td><td>Get all installed stickers</td></tr><tr><td><a href="/method/messages.getMaskStickers">messages.getMaskStickers</a></td><td>Get installed mask stickers</td></tr><tr><td><a href="/method/messages.getEmojiStickers">messages.getEmojiStickers</a></td><td>Gets the list of currently installed <a href="/api/custom-emoji">custom emoji stickersets</a>.</td></tr></tbody></table>
