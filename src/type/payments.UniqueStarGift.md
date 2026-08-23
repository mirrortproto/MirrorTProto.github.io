---
title: "payments.UniqueStarGift"
original: "https://core.telegram.org/type/payments.UniqueStarGift"
section: ref
description: "Represents a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.UniqueStarGift","url":"/type/payments.UniqueStarGift/"}]
layout: layout.njk
---

# payments.UniqueStarGift

Represents a [collectible gift »](/api/gifts/#collectible-gifts).

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;

---functions---

payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGift">payments.uniqueStarGift</a></td><td>Represents a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGift">payments.getUniqueStarGift</a></td><td>Obtain info about a <a href="/api/gifts#collectible-gifts">collectible gift »</a> using a slug obtained from a <a href="/api/links#collectible-gift-link">collectible gift link »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
