---
title: "InputStorePaymentPurpose"
original: "https://core.telegram.org/type/InputStorePaymentPurpose"
section: ref
description: "Info about a Telegram Premium purchase"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputStorePaymentPurpose","url":"/type/InputStorePaymentPurpose/"}]
layout: layout.njk
---

# InputStorePaymentPurpose

Info about a Telegram Premium purchase

```
inputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;
inputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;
inputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentStarsTopup#f9a2a6cb flags:# stars:long currency:string amount:long spend_purpose_peer:flags.0?InputPeer = InputStorePaymentPurpose;
inputStorePaymentStarsGift#1d741ef7 user_id:InputUser stars:long currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputStorePaymentPremiumSubscription">inputStorePaymentPremiumSubscription</a></td><td>Info about a Telegram Premium purchase</td></tr><tr><td><a href="/constructor/inputStorePaymentGiftPremium">inputStorePaymentGiftPremium</a></td><td>Info about a gifted Telegram Premium purchase</td></tr><tr><td><a href="/constructor/inputStorePaymentPremiumGiftCode">inputStorePaymentPremiumGiftCode</a></td><td>Used to gift <a href="/api/premium">Telegram Premium</a> subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see <a href="/api/giveaways">here »</a> for more info on giveaways and gifts.</td></tr><tr><td><a href="/constructor/inputStorePaymentPremiumGiveaway">inputStorePaymentPremiumGiveaway</a></td><td>Used to pay for a <a href="/api/giveaways">giveaway, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsTopup">inputStorePaymentStarsTopup</a></td><td>Used to top up the <a href="/api/stars">Telegram Stars balance</a> of the current account.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsGift">inputStorePaymentStarsGift</a></td><td>Used to gift <a href="/api/stars">Telegram Stars</a> to a friend.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsGiveaway">inputStorePaymentStarsGiveaway</a></td><td>Used to pay for a <a href="/api/giveaways#star-giveaways">star giveaway, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputStorePaymentAuthCode">inputStorePaymentAuthCode</a></td><td>Indicates payment for a login code.</td></tr></tbody></table>
