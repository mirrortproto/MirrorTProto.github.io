---
title: "Payments.CheckedGiftCode"
original: "https://core.telegram.org/type/payments.CheckedGiftCode"
section: ref
description: "Info about a Telegram Premium Giftcode."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.CheckedGiftCode","url":"/type/payments.CheckedGiftCode/"}]
layout: layout.njk
---

# Payments.CheckedGiftCode

Info about a [Telegram Premium Giftcode](/api/giveaways/).

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;

---functions---

payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.checkedGiftCode">payments.checkedGiftCode</a></td><td>Contains info about a <a href="/api/links#premium-giftcode-links">Telegram Premium giftcode link</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.checkGiftCode">payments.checkGiftCode</a></td><td>Obtain information about a <a href="/api/giveaways">Telegram Premium giftcode »</a></td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
