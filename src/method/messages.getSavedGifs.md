---
title: "messages.getSavedGifs"
original: "https://core.telegram.org/method/messages.getSavedGifs"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedGifs","url":"/method/messages.getSavedGifs/"}]
layout: layout.njk
---

# messages.getSavedGifs

Get saved GIFs.

```
messages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;
---functions---
messages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.SavedGifs](/type/messages.SavedGifs/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
