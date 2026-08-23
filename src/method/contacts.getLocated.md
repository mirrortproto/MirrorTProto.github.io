---
title: "contacts.getLocated"
original: "https://core.telegram.org/method/contacts.getLocated"
section: ref
description: "Get users and geochats near you, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getLocated","url":"/method/contacts.getLocated/"}]
layout: layout.njk
---

# contacts.getLocated

Get users and geochats near you, see [here »](/api/nearby/) for more info.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.<br>Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown.</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Geolocation</td></tr><tr><td><strong>self_expires</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>BUSINESS_ADDRESS_ACTIVE</td><td>The user is currently advertising a <a href="/api/business#location">Business Location</a>, the location may only be changed (or removed) using <a href="/method/account.updateBusinessLocation">account.updateBusinessLocation&nbsp;»</a>. .</td></tr><tr><td>400</td><td>GEO_POINT_INVALID</td><td>Invalid geoposition provided.</td></tr><tr><td>406</td><td>USERPIC_PRIVACY_REQUIRED</td><td>You need to disable privacy settings for your profile picture in order to make your geolocation public.</td></tr><tr><td>406</td><td>USERPIC_UPLOAD_REQUIRED</td><td>You must have a profile picture to publish your geolocation.</td></tr></tbody></table>

### Related pages

#### [Nearby users&chats](/api/nearby/)

How to work with geolocation-based features like geochats and the nearby users feature.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [account.updateBusinessLocation](/method/account.updateBusinessLocation/)

[Businesses »](/api/business/#location) may advertise their location using this method, see [here »](/api/business/#location) for more info.

To remove business location information invoke the method without setting any of the parameters.
