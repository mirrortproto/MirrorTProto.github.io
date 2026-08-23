---
title: "BotInlineMessage"
original: "https://core.telegram.org/type/BotInlineMessage"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotInlineMessage","url":"/type/BotInlineMessage/"}]
layout: layout.njk
---

# BotInlineMessage

Inline message

```
botInlineMessageMediaAuto#764cf810 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageText#8c7f65e2 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaGeo#51846fd flags:# geo:GeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaVenue#8a86659c flags:# geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaInvoice#354a9b09 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument currency:string total_amount:long reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
botInlineMessageMediaWebPage#809ad9a6 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true manual:flags.7?true safe:flags.8?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botInlineMessageMediaAuto">botInlineMessageMediaAuto</a></td><td>Send whatever media is attached to the <a href="/constructor/botInlineMediaResult">botInlineMediaResult</a></td></tr><tr><td><a href="/constructor/botInlineMessageText">botInlineMessageText</a></td><td>Send a simple text message</td></tr><tr><td><a href="/constructor/botInlineMessageMediaGeo">botInlineMessageMediaGeo</a></td><td>Send a geolocation</td></tr><tr><td><a href="/constructor/botInlineMessageMediaVenue">botInlineMessageMediaVenue</a></td><td>Send a venue</td></tr><tr><td><a href="/constructor/botInlineMessageMediaContact">botInlineMessageMediaContact</a></td><td>Send a contact</td></tr><tr><td><a href="/constructor/botInlineMessageMediaInvoice">botInlineMessageMediaInvoice</a></td><td>Send an invoice</td></tr><tr><td><a href="/constructor/botInlineMessageMediaWebPage">botInlineMessageMediaWebPage</a></td><td>Specifies options that must be used to generate the link preview for the message, or even a standalone link preview without an attached message.</td></tr></tbody></table>
