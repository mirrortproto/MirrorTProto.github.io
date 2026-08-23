---
title: "payments.checkGiftCode"
original: "https://core.telegram.org/method/payments.checkGiftCode"
section: ref
description: "Obtain information about a Telegram Premium giftcode »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.checkGiftCode","url":"/method/payments.checkGiftCode/"}]
layout: layout.njk
---

# payments.checkGiftCode

Obtain information about a [Telegram Premium giftcode »](/api/giveaways/)

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
---functions---
payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The giftcode to check</td></tr></tbody></table>

### Result

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GIFT_SLUG_EXPIRED</td><td>The specified gift slug has expired.</td></tr><tr><td>400</td><td>GIFT_SLUG_INVALID</td><td>The specified slug is invalid.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
