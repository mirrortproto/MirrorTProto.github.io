---
title: "StarGiftAttribute"
original: "https://core.telegram.org/type/StarGiftAttribute"
section: ref
description: "An attribute of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAttribute","url":"/type/StarGiftAttribute/"}]
layout: layout.njk
---

# StarGiftAttribute

An attribute of a [collectible gift »](/api/gifts/#collectible-gifts).

```
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAttributeModel">starGiftAttributeModel</a></td><td>The model of a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributePattern">starGiftAttributePattern</a></td><td>A <a href="/api/stickers">sticker</a> applied on the backdrop of a <a href="/api/gifts">collectible gift »</a> using a repeating pattern.</td></tr><tr><td><a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a></td><td>The backdrop of a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a></td><td>Info about the sender, receiver and message attached to the original <a href="/api/gifts">gift »</a>, before it was upgraded to a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
