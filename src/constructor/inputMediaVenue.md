---
title: "inputMediaVenue"
original: "https://core.telegram.org/constructor/inputMediaVenue"
section: ref
description: "Can be used to send a venue geolocation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaVenue","url":"/constructor/inputMediaVenue/"}]
layout: layout.njk
---

# inputMediaVenue

Can be used to send a venue geolocation.

```
inputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Geolocation</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Venue name</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Physical address of the venue</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Venue provider: currently only "foursquare" and "gplaces" (Google Places) need to be supported</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Venue ID in the provider's database</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Venue type in the provider's database</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
