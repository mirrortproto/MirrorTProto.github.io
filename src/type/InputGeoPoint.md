---
title: "InputGeoPoint"
original: "https://core.telegram.org/type/InputGeoPoint"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputGeoPoint","url":"/type/InputGeoPoint/"}]
layout: layout.njk
---

# InputGeoPoint

Defines a GeoPoint.

```
inputGeoPointEmpty#e4c123d6 = InputGeoPoint;
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputGeoPointEmpty">inputGeoPointEmpty</a></td><td>Empty GeoPoint constructor.</td></tr><tr><td><a href="/constructor/inputGeoPoint">inputGeoPoint</a></td><td>Defines a GeoPoint by its coordinates.</td></tr></tbody></table>
