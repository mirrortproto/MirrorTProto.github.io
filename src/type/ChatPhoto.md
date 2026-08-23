---
title: "ChatPhoto"
original: "https://core.telegram.org/type/ChatPhoto"
section: ref
description: "Object defines a group profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatPhoto","url":"/type/ChatPhoto/"}]
layout: layout.njk
---

# ChatPhoto

Object defines a group profile photo.

```
chatPhotoEmpty#37c1011c = ChatPhoto;
chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatPhotoEmpty">chatPhotoEmpty</a></td><td>Group photo is not set.</td></tr><tr><td><a href="/constructor/chatPhoto">chatPhoto</a></td><td>Group profile photo.</td></tr></tbody></table>
