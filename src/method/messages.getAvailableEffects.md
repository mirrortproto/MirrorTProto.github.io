---
title: "messages.getAvailableEffects"
original: "https://core.telegram.org/method/messages.getAvailableEffects"
section: ref
description: "Fetch the full list of usable animated message effects »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAvailableEffects","url":"/method/messages.getAvailableEffects/"}]
layout: layout.njk
---

# messages.getAvailableEffects

Fetch the full list of usable [animated message effects »](/api/effects/).

```
messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;
---functions---
messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AvailableEffects](/type/messages.AvailableEffects/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.
