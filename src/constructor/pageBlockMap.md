---
title: "pageBlockMap"
original: "https://core.telegram.org/constructor/pageBlockMap"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockMap","url":"/constructor/pageBlockMap/"}]
layout: layout.njk
---

# pageBlockMap

A map

```
pageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Location of the map center</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Map zoom level; 13-20</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Map width in pixels before applying scale; 16-102</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Map height in pixels before applying scale; 16-1024</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption">PageCaption</a></td><td>Caption</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
