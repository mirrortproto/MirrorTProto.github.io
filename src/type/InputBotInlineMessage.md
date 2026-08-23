---
title: "InputBotInlineMessage"
original: "https://core.telegram.org/type/InputBotInlineMessage"
section: ref
description: "Represents a sent inline message from the perspective of a bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBotInlineMessage","url":"/type/InputBotInlineMessage/"}]
layout: layout.njk
---

# InputBotInlineMessage

Represents a sent inline message from the perspective of a bot

```
inputBotInlineMessageMediaAuto#3380c786 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageText#3dcd7a87 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaGeo#96929a85 flags:# geo_point:InputGeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaVenue#417bbf11 flags:# geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaContact#a6edbffd flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageGame#4b425864 flags:# reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaInvoice#d7e78225 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
inputBotInlineMessageMediaWebPage#bddcc510 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true optional:flags.6?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotInlineMessageMediaAuto">inputBotInlineMessageMediaAuto</a></td><td>A media</td></tr><tr><td><a href="/constructor/inputBotInlineMessageText">inputBotInlineMessageText</a></td><td>Simple text message</td></tr><tr><td><a href="/constructor/inputBotInlineMessageMediaGeo">inputBotInlineMessageMediaGeo</a></td><td>Geolocation</td></tr><tr><td><a href="/constructor/inputBotInlineMessageMediaVenue">inputBotInlineMessageMediaVenue</a></td><td>Venue</td></tr><tr><td><a href="/constructor/inputBotInlineMessageMediaContact">inputBotInlineMessageMediaContact</a></td><td>A contact</td></tr><tr><td><a href="/constructor/inputBotInlineMessageGame">inputBotInlineMessageGame</a></td><td>A game</td></tr><tr><td><a href="/constructor/inputBotInlineMessageMediaInvoice">inputBotInlineMessageMediaInvoice</a></td><td>An invoice</td></tr><tr><td><a href="/constructor/inputBotInlineMessageMediaWebPage">inputBotInlineMessageMediaWebPage</a></td><td>Specifies options that will be used to generate the link preview for the message, or even a standalone link preview without an attached message.</td></tr></tbody></table>
