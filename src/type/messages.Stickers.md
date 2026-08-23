---
title: "Messages.Stickers"
original: "https://core.telegram.org/type/messages.Stickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.Stickers","url":"/type/messages.Stickers/"}]
layout: layout.njk
---

# Messages.Stickers

Stickers

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickersNotModified">messages.stickersNotModified</a></td><td>No new stickers were found for the given query</td></tr><tr><td><a href="/constructor/messages.stickers">messages.stickers</a></td><td>Found stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickers">messages.getStickers</a></td><td>Get stickers by emoji</td></tr></tbody></table>
