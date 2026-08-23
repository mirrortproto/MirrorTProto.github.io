---
title: "stories.createAlbum"
original: "https://core.telegram.org/method/stories.createAlbum"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.createAlbum","url":"/method/stories.createAlbum/"}]
layout: layout.njk
---

# stories.createAlbum

Creates a [story album](/api/stories/#story-albums).

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
---functions---
stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The owned peer where to create the album.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Album name.</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Stories to add to the album.</td></tr></tbody></table>

### Result

[StoryAlbum](/type/StoryAlbum/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
