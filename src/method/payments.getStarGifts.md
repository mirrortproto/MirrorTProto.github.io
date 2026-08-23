---
title: "payments.getStarGifts"
original: "https://core.telegram.org/method/payments.getStarGifts"
section: ref
description: "Get a list of available gifts, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGifts","url":"/method/payments.getStarGifts/"}]
layout: layout.njk
---

# payments.getStarGifts

Get a list of available [gifts, see here »](/api/gifts/) for more info.

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
---functions---
payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.<br>The hash may be generated locally by using the <code>id</code>s of the returned or stored sticker <a href="/constructor/starGift">starGift</a>s.</td></tr></tbody></table>

### Result

[payments.StarGifts](/type/payments.StarGifts/)

### Both users and bots can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
