---
title: "stories.deleteAlbum"
original: "https://core.telegram.org/method/stories.deleteAlbum"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.deleteAlbum","url":"/method/stories.deleteAlbum/"}]
layout: layout.njk
---

# stories.deleteAlbum

Delete a [story album](/api/stories/#story-albums).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.deleteAlbum#8d3456d0 peer:InputPeer album_id:int = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Owned peer where the album is located.</td></tr><tr><td><strong>album_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the album to delete.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
