---
title: "StarsTransactionPeer"
original: "https://core.telegram.org/type/StarsTransactionPeer"
section: ref
description: "Source of an incoming Telegram Star transaction, or its recipient for outgoing Telegram Star transactions."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsTransactionPeer","url":"/type/StarsTransactionPeer/"}]
layout: layout.njk
---

# StarsTransactionPeer

Source of an incoming [Telegram Star transaction](/api/stars/), or its recipient for outgoing [Telegram Star transactions](/api/stars/).

```
starsTransactionPeerUnsupported#95f2bfe4 = StarsTransactionPeer;
starsTransactionPeerAppStore#b457b375 = StarsTransactionPeer;
starsTransactionPeerPlayMarket#7b560a0b = StarsTransactionPeer;
starsTransactionPeerPremiumBot#250dbaf8 = StarsTransactionPeer;
starsTransactionPeerFragment#e92fd902 = StarsTransactionPeer;
starsTransactionPeer#d80da15d peer:Peer = StarsTransactionPeer;
starsTransactionPeerAds#60682812 = StarsTransactionPeer;
starsTransactionPeerAPI#f9677aad = StarsTransactionPeer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsTransactionPeerUnsupported">starsTransactionPeerUnsupported</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction that cannot be described using the current layer.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAppStore">starsTransactionPeerAppStore</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction with the App Store, used when purchasing Telegram Stars through the App Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPlayMarket">starsTransactionPeerPlayMarket</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction with the Play Store, used when purchasing Telegram Stars through the Play Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPremiumBot">starsTransactionPeerPremiumBot</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction made using <a href="https://t.me/premiumbot">@PremiumBot</a> (i.e. using the <a href="/constructor/inputInvoiceStars">inputInvoiceStars</a> flow described <a href="/api/stars#buying-or-gifting-stars">here »</a>).</td></tr><tr><td><a href="/constructor/starsTransactionPeerFragment">starsTransactionPeerFragment</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction with <a href="https://fragment.com">Fragment</a>, used when purchasing Telegram Stars through <a href="https://fragment.com">Fragment</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeer">starsTransactionPeer</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction with another peer.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAds">starsTransactionPeerAds</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction used to pay for <a href="/api/stars#paying-for-ads">Telegram ads as specified here »</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAPI">starsTransactionPeerAPI</a></td><td>Describes a <a href="/api/stars">Telegram Star</a> transaction used to pay for paid API usage, such as <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">paid bot broadcasts</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
