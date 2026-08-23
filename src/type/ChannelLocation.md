---
title: "ChannelLocation"
original: "https://core.telegram.org/type/ChannelLocation"
section: ref
description: "Geographical location of supergroup (geogroups)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChannelLocation","url":"/type/ChannelLocation/"}]
layout: layout.njk
---

# ChannelLocation

Geographical location of supergroup (geogroups)

```
channelLocationEmpty#bfb5ad8b = ChannelLocation;
channelLocation#209b82db geo_point:GeoPoint address:string = ChannelLocation;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channelLocationEmpty">channelLocationEmpty</a></td><td>No location (normal supergroup)</td></tr><tr><td><a href="/constructor/channelLocation">channelLocation</a></td><td>Geographical location of supergroup (geogroups)</td></tr></tbody></table>
