---
title: "payments.checkCanSendGift"
original: "https://core.telegram.org/method/payments.checkCanSendGift"
section: ref
description: "Check if the specified gift » can be sent."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.checkCanSendGift","url":"/method/payments.checkCanSendGift/"}]
layout: layout.njk
---

# payments.checkCanSendGift

Check if the specified [gift »](/api/gifts/) can be sent.

```
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;
---functions---
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Gift ID.</td></tr></tbody></table>

### Result

[payments.CheckCanSendGiftResult](/type/payments.CheckCanSendGiftResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
