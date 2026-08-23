---
title: "InputSavedStarGift"
original: "https://core.telegram.org/type/InputSavedStarGift"
section: ref
description: "Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSavedStarGift","url":"/type/InputSavedStarGift/"}]
layout: layout.njk
---

# InputSavedStarGift

Points to a [gift »](/api/gifts/).

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSavedStarGiftUser">inputSavedStarGiftUser</a></td><td>A gift received in a private chat with another user.</td></tr><tr><td><a href="/constructor/inputSavedStarGiftChat">inputSavedStarGiftChat</a></td><td>A gift received by a channel we own.</td></tr><tr><td><a href="/constructor/inputSavedStarGiftSlug">inputSavedStarGiftSlug</a></td><td>Points to a <a href="/api/links#collectible-gift-link">collectible gift obtained from a collectible gift link »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
