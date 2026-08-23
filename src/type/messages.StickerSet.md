---
title: "Messages.StickerSet"
original: "https://core.telegram.org/type/messages.StickerSet"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.StickerSet","url":"/type/messages.StickerSet/"}]
layout: layout.njk
---

# Messages.StickerSet

Stickerset

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;

stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
stickers.changeSticker#f5537ebc flags:# sticker:InputDocument emoji:flags.0?string mask_coords:flags.1?MaskCoords keywords:flags.2?string = messages.StickerSet;
stickers.renameStickerSet#124b1c00 stickerset:InputStickerSet title:string = messages.StickerSet;
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSet">messages.stickerSet</a></td><td>Stickerset and stickers inside it</td></tr><tr><td><a href="/constructor/messages.stickerSetNotModified">messages.stickerSetNotModified</a></td><td>The stickerset hasn't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickerSet">messages.getStickerSet</a></td><td>Get info about a stickerset</td></tr><tr><td><a href="/method/stickers.createStickerSet">stickers.createStickerSet</a></td><td>Create a stickerset.</td></tr><tr><td><a href="/method/stickers.removeStickerFromSet">stickers.removeStickerFromSet</a></td><td>Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.changeStickerPosition">stickers.changeStickerPosition</a></td><td>Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.addStickerToSet">stickers.addStickerToSet</a></td><td>Add a sticker to a stickerset. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.setStickerSetThumb">stickers.setStickerSetThumb</a></td><td>Set stickerset thumbnail</td></tr><tr><td><a href="/method/stickers.changeSticker">stickers.changeSticker</a></td><td>Update the keywords, emojis or <a href="/api/stickers#mask-stickers">mask coordinates</a> of a sticker.</td></tr><tr><td><a href="/method/stickers.renameStickerSet">stickers.renameStickerSet</a></td><td>Renames a stickerset.</td></tr><tr><td><a href="/method/stickers.replaceSticker">stickers.replaceSticker</a></td><td>Replace a sticker in a <a href="/api/stickers">stickerset »</a>.</td></tr></tbody></table>
