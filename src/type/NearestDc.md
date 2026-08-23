---
title: "NearestDc"
original: "https://core.telegram.org/type/NearestDc"
section: ref
description: "Object contains info on nearest data center."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"NearestDc","url":"/type/NearestDc/"}]
layout: layout.njk
---

# NearestDc

Object contains info on nearest data center.

```
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;

---functions---

help.getNearestDc#1fb33026 = NearestDc;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/nearestDc">nearestDc</a></td><td>Nearest data center, according to geo-ip.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getNearestDc">help.getNearestDc</a></td><td>Returns info on data center nearest to the user.</td></tr></tbody></table>
