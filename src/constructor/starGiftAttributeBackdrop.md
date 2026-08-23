---
title: "starGiftAttributeBackdrop"
original: "https://core.telegram.org/constructor/starGiftAttributeBackdrop"
section: ref
description: "The backdrop of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAttributeBackdrop","url":"/constructor/starGiftAttributeBackdrop/"}]
layout: layout.njk
---

# starGiftAttributeBackdrop

The backdrop of a [collectible gift »](/api/gifts/#collectible-gifts).

```
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Name of the backdrop</td></tr><tr><td><strong>backdrop_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Unique ID of the backdrop</td></tr><tr><td><strong>center_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Color of the center of the backdrop in RGB24 format.</td></tr><tr><td><strong>edge_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Color of the edges of the backdrop in RGB24 format.</td></tr><tr><td><strong>pattern_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Color of the <a href="/constructor/starGiftAttributePattern">starGiftAttributePattern</a> applied on the backdrop in RGB24 format.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Color of the text on the backdrop in RGB24 format.</td></tr><tr><td><strong>rarity</strong></td><td style="text-align: center;"><a href="/type/StarGiftAttributeRarity">StarGiftAttributeRarity</a></td><td>Rarity of this backdrop.</td></tr></tbody></table>

### Type

[StarGiftAttribute](/type/StarGiftAttribute/)

### Related pages

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

A [sticker](/api/stickers/) applied on the backdrop of a [collectible gift »](/api/gifts/) using a repeating pattern.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
