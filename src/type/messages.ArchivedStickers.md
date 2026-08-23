---
title: "Messages.ArchivedStickers"
original: "https://core.telegram.org/type/messages.ArchivedStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.ArchivedStickers","url":"/type/messages.ArchivedStickers/"}]
layout: layout.njk
---

# Messages.ArchivedStickers

Archived stickers

```
messages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;

---functions---

messages.getArchivedStickers#57f17692 flags:# masks:flags.0?true emojis:flags.1?true offset_id:long limit:int = messages.ArchivedStickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.archivedStickers">messages.archivedStickers</a></td><td>Archived stickersets</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getArchivedStickers">messages.getArchivedStickers</a></td><td>Get all archived stickers</td></tr></tbody></table>
