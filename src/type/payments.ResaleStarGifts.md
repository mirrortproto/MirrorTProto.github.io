---
title: "payments.ResaleStarGifts"
original: "https://core.telegram.org/type/payments.ResaleStarGifts"
section: ref
description: "List of gifts currently on resale »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.ResaleStarGifts","url":"/type/payments.ResaleStarGifts/"}]
layout: layout.njk
---

# payments.ResaleStarGifts

List of gifts currently on [resale »](/api/gifts/#reselling-collectible-gifts).

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;

---functions---

payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a></td><td>List of gifts currently on <a href="/api/gifts#reselling-collectible-gifts">resale »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a></td><td>Get <a href="/api/gifts#collectible-gifts">collectible gifts</a> of a specific type currently on resale, see <a href="/api/gifts#reselling-collectible-gifts">here »</a> for more info.<br><br><code>sort_by_price</code> and <code>sort_by_num</code> are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.<br><br>See <a href="/api/gifts#sending-gifts">here »</a> for detailed documentation on this method.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
