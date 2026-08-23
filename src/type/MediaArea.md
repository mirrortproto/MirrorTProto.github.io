---
title: "MediaArea"
original: "https://core.telegram.org/type/MediaArea"
section: ref
description: "Represents a story media area »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MediaArea","url":"/type/MediaArea/"}]
layout: layout.njk
---

# MediaArea

Represents a [story media area »](/api/stories/#media-areas)

```
mediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;
inputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;
mediaAreaGeoPoint#cad5452d flags:# coordinates:MediaAreaCoordinates geo:GeoPoint address:flags.0?GeoPointAddress = MediaArea;
mediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;
mediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;
inputMediaAreaChannelPost#2271f2bf coordinates:MediaAreaCoordinates channel:InputChannel msg_id:int = MediaArea;
mediaAreaUrl#37381085 coordinates:MediaAreaCoordinates url:string = MediaArea;
mediaAreaWeather#49a6549c coordinates:MediaAreaCoordinates emoji:string temperature_c:double color:int = MediaArea;
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/mediaAreaVenue">mediaAreaVenue</a></td><td>Represents a location tag attached to a <a href="/api/stories">story</a>, with additional venue information.</td></tr><tr><td><a href="/constructor/inputMediaAreaVenue">inputMediaAreaVenue</a></td><td>Represents a <a href="/api/stories#media-areas">location tag</a> attached to a <a href="/api/stories">story</a>, with additional venue information.</td></tr><tr><td><a href="/constructor/mediaAreaGeoPoint">mediaAreaGeoPoint</a></td><td>Represents a geolocation tag attached to a <a href="/api/stories">story</a>.</td></tr><tr><td><a href="/constructor/mediaAreaSuggestedReaction">mediaAreaSuggestedReaction</a></td><td>Represents a reaction bubble.</td></tr><tr><td><a href="/constructor/mediaAreaChannelPost">mediaAreaChannelPost</a></td><td>Represents a channel post.</td></tr><tr><td><a href="/constructor/inputMediaAreaChannelPost">inputMediaAreaChannelPost</a></td><td>Represents a channel post</td></tr><tr><td><a href="/constructor/mediaAreaUrl">mediaAreaUrl</a></td><td>Represents a <a href="/api/stories#urls">URL media area</a>.</td></tr><tr><td><a href="/constructor/mediaAreaWeather">mediaAreaWeather</a></td><td>Represents a <a href="/api/stories#weather">weather widget »</a>.</td></tr><tr><td><a href="/constructor/mediaAreaStarGift">mediaAreaStarGift</a></td><td>Represents a <a href="/api/gifts#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
