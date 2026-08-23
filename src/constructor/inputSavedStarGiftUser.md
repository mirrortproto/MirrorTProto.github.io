---
title: "inputSavedStarGiftUser"
original: "https://core.telegram.org/constructor/inputSavedStarGiftUser"
section: ref
description: "A gift received in a private chat with another user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSavedStarGiftUser","url":"/constructor/inputSavedStarGiftUser/"}]
layout: layout.njk
---

# inputSavedStarGiftUser

A gift received in a private chat with another user.

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the <a href="/constructor/messageService">messageService</a> with the <a href="/constructor/messageActionStarGift">messageActionStarGift</a> with the gift.</td></tr></tbody></table>

### Type

[InputSavedStarGift](/type/InputSavedStarGift/)

### Related pages

#### [messageService](/constructor/messageService/)

Indicates a service message

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.
