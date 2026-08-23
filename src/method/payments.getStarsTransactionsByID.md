---
title: "payments.getStarsTransactionsByID"
original: "https://core.telegram.org/method/payments.getStarsTransactionsByID"
section: ref
description: "Obtain info about Telegram Star transactions » using specific transaction IDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsTransactionsByID","url":"/method/payments.getStarsTransactionsByID/"}]
layout: layout.njk
---

# payments.getStarsTransactionsByID

Obtain info about [Telegram Star transactions »](/api/stars/#balance-and-transaction-history) using specific transaction IDs.

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, returns channel/bot ad revenue transactions in nanograms.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Channel or bot.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputStarsTransaction">InputStarsTransaction</a>&gt;</td><td>Transaction IDs.</td></tr></tbody></table>

### Result

[payments.StarsStatus](/type/payments.StarsStatus/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TRANSACTION_ID_INVALID</td><td>The specified transaction ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
