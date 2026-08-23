---
title: "InputInvoice"
original: "https://core.telegram.org/type/InputInvoice"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputInvoice","url":"/type/InputInvoice/"}]
layout: layout.njk
---

# InputInvoice

An invoice

```
inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
inputInvoiceSlug#c326caef slug:string = InputInvoice;
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceChatInviteSubscription#34e793f1 hash:string = InputInvoice;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceStarGiftDropOriginalDetails#923d8d1 stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputInvoiceMessage">inputInvoiceMessage</a></td><td>An invoice contained in a <a href="/constructor/messageMediaInvoice">messageMediaInvoice</a> message or <a href="/api/paid-media">paid media »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceSlug">inputInvoiceSlug</a></td><td>An invoice slug taken from an <a href="/api/links#invoice-links">invoice deep link</a> or from the <a href="/api/config#premium-invoice-slug"><code>premium_invoice_slug</code> app config parameter »</a></td></tr><tr><td><a href="/constructor/inputInvoicePremiumGiftCode">inputInvoicePremiumGiftCode</a></td><td>Used if the user wishes to start a channel/supergroup <a href="/api/giveaways">giveaway</a> or send some <a href="/api/giveaways">giftcodes</a> to members of a channel/supergroup, in exchange for <a href="/api/boost">boosts</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStars">inputInvoiceStars</a></td><td>Used to top up the <a href="/api/stars">Telegram Stars</a> balance of the current account or someone else's account, or to start a <a href="/api/giveaways#star-giveaways">Telegram Star giveaway »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceChatInviteSubscription">inputInvoiceChatInviteSubscription</a></td><td>Used to pay for a <a href="/api/stars#star-subscriptions">Telegram Star subscription »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGift">inputInvoiceStarGift</a></td><td>Used to buy a <a href="/api/gifts">Telegram Star Gift, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftUpgrade">inputInvoiceStarGiftUpgrade</a></td><td>Used to <a href="/api/gifts#upgrade-a-gift-to-a-collectible-gift">pay to upgrade a Gift to a collectible gift</a>, see the <a href="/api/gifts#collectible-gifts">collectible gifts »</a> documentation for more info on the full flow.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftTransfer">inputInvoiceStarGiftTransfer</a></td><td>Used to <a href="/api/gifts#transferring-collectible-gifts">pay to transfer a collectible gift to another peer</a>, see the <a href="/api/gifts#transferring-collectible-gifts">gifts »</a> documentation for more info.</td></tr><tr><td><a href="/constructor/inputInvoicePremiumGiftStars">inputInvoicePremiumGiftStars</a></td><td>Used to gift a <a href="/api/premium">Telegram Premium</a> subscription to another user, paying with <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceBusinessBotTransferStars">inputInvoiceBusinessBotTransferStars</a></td><td>Transfer stars from the balance of a user account <a href="/api/bots/connected-business-bots">connected to a business bot</a>, to the balance of the <a href="/api/bots/connected-business-bots">business bot</a>, see <a href="/api/stars#transferring-stars-from-a-business-account-to-the-business-bot">here »</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftResale">inputInvoiceStarGiftResale</a></td><td>Used to buy a <a href="/api/gifts#collectible-gifts">collectible gift</a> currently up on resale, see <a href="/api/gifts#reselling-collectible-gifts">here</a> for more info on the full flow.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftPrepaidUpgrade">inputInvoiceStarGiftPrepaidUpgrade</a></td><td><a href="/api/gifts#prepaying-for-someone-elses-upgrade">Separately prepay for the upgrade of a gift »</a>.</td></tr><tr><td><a href="/constructor/inputInvoicePremiumAuthCode">inputInvoicePremiumAuthCode</a></td><td>Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see <a href="/api/auth#paid-auth">here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftDropOriginalDetails">inputInvoiceStarGiftDropOriginalDetails</a></td><td>Used to pay for for the removal of the <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a> attribute from a collectible gift, see <a href="/api/gifts#dropping-the-original-details-of-an-upgraded-gift">here »</a> for the full flow.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftAuctionBid">inputInvoiceStarGiftAuctionBid</a></td><td>Used to place a bid in a <a href="/api/auctions">collectible gift auction »</a>.</td></tr></tbody></table>
