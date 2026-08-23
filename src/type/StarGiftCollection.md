---
title: "StarGiftCollection"
original: "https://core.telegram.org/type/StarGiftCollection"
section: ref
description: "Represents a star gift collection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftCollection","url":"/type/StarGiftCollection/"}]
layout: layout.njk
---

# StarGiftCollection

Represents a [star gift collection »](/api/gifts/#gift-collections).

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;

---functions---

payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftCollection">starGiftCollection</a></td><td>Represents a <a href="/api/gifts#gift-collections">star gift collection »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.createStarGiftCollection">payments.createStarGiftCollection</a></td><td>Create a <a href="/api/gifts#gift-collections">star gift collection »</a>.</td></tr><tr><td><a href="/method/payments.updateStarGiftCollection">payments.updateStarGiftCollection</a></td><td>Add or remove gifts from a <a href="/api/gifts#gift-collections">star gift collection »</a>, or rename the collection.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
