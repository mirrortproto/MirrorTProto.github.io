---
title: "payments.StarGifts"
original: "https://core.telegram.org/type/payments.StarGifts"
section: ref
description: "Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarGifts","url":"/type/payments.StarGifts/"}]
layout: layout.njk
---

# payments.StarGifts

Available [gifts »](/api/gifts/).

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;

---functions---

payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftsNotModified">payments.starGiftsNotModified</a></td><td>The list of available <a href="/api/gifts">gifts »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/payments.starGifts">payments.starGifts</a></td><td>Available <a href="/api/gifts">gifts »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGifts">payments.getStarGifts</a></td><td>Get a list of available <a href="/api/gifts">gifts, see here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
