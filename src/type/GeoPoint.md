---
title: "GeoPoint"
original: "https://core.telegram.org/type/GeoPoint"
section: ref
description: "Object defines a GeoPoint."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GeoPoint","url":"/type/GeoPoint/"}]
layout: layout.njk
---

# GeoPoint

Object defines a GeoPoint.

```
geoPointEmpty#1117dd5f = GeoPoint;
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/geoPointEmpty">geoPointEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/geoPoint">geoPoint</a></td><td>GeoPoint.</td></tr></tbody></table>
