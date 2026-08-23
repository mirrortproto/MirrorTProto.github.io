---
title: "Photo"
original: "https://core.telegram.org/type/Photo"
section: ref
description: "Object describes a photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Photo","url":"/type/Photo/"}]
layout: layout.njk
---

# Photo

Object describes a photo.

```
photoEmpty#2331b22d id:long = Photo;
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photoEmpty">photoEmpty</a></td><td>Empty constructor, non-existent photo</td></tr><tr><td><a href="/constructor/photo">photo</a></td><td>Photo</td></tr></tbody></table>
