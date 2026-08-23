---
title: "account.PaidMessagesRevenue"
original: "https://core.telegram.org/type/account.PaidMessagesRevenue"
section: ref
description: "Total number of non-refunded Telegram Stars a user has spent on sending us messages either directly or through a channel, see here » for more info on paid messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.PaidMessagesRevenue","url":"/type/account.PaidMessagesRevenue/"}]
layout: layout.njk
---

# account.PaidMessagesRevenue

Total number of non-refunded [Telegram Stars](/api/stars/) a user has spent on sending us messages either directly or through a channel, see [here »](/api/paid-messages/) for more info on paid messages.

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;

---functions---

account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.paidMessagesRevenue">account.paidMessagesRevenue</a></td><td>Total number of non-refunded <a href="/api/stars">Telegram Stars</a> a user has spent on sending us messages either directly or through a channel, see <a href="/api/paid-messages">here »</a> for more info on paid messages.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPaidMessagesRevenue">account.getPaidMessagesRevenue</a></td><td>Get the number of stars we have received from the specified user thanks to <a href="/api/paid-messages">paid messages »</a>; the received amount will be equal to the sent amount multiplied by <a href="/api/config#stars-paid-message-commission-permille">stars_paid_message_commission_permille</a> divided by 1000.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
