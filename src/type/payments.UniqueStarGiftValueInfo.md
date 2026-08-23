---
title: "payments.UniqueStarGiftValueInfo"
original: "https://core.telegram.org/type/payments.UniqueStarGiftValueInfo"
section: ref
description: "Information about the value of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.UniqueStarGiftValueInfo","url":"/type/payments.UniqueStarGiftValueInfo/"}]
layout: layout.njk
---

# payments.UniqueStarGiftValueInfo

Information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;

---functions---

payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGiftValueInfo">payments.uniqueStarGiftValueInfo</a></td><td>Information about the value of a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGiftValueInfo">payments.getUniqueStarGiftValueInfo</a></td><td>Get information about the value of a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
