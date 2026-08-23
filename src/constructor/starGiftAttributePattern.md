---
title: "starGiftAttributePattern"
original: "https://core.telegram.org/constructor/starGiftAttributePattern"
section: ref
description: "A sticker applied on the backdrop of a collectible gift » using a repeating pattern."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAttributePattern","url":"/constructor/starGiftAttributePattern/"}]
layout: layout.njk
---

# starGiftAttributePattern

A [sticker](/api/stickers/) applied on the backdrop of a [collectible gift »](/api/gifts/) using a repeating pattern.

```
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Name of the symbol</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>The symbol</td></tr><tr><td><strong>rarity</strong></td><td style="text-align: center;"><a href="/type/StarGiftAttributeRarity">StarGiftAttributeRarity</a></td><td>Rarity of this pattern.</td></tr></tbody></table>

### Type

[StarGiftAttribute](/type/StarGiftAttribute/)

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
