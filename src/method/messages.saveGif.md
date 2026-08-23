---
title: "messages.saveGif"
original: "https://core.telegram.org/method/messages.saveGif"
section: ref
description: "Add GIF to saved gifs list"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.saveGif","url":"/method/messages.saveGif/"}]
layout: layout.njk
---

# messages.saveGif

Add GIF to saved gifs list

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>GIF to save</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether to remove GIF from saved gifs list</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GIF_ID_INVALID</td><td>The provided GIF ID is invalid.</td></tr></tbody></table>
