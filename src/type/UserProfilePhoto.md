---
title: "UserProfilePhoto"
original: "https://core.telegram.org/type/UserProfilePhoto"
section: ref
description: "Object contains info on the user's profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"UserProfilePhoto","url":"/type/UserProfilePhoto/"}]
layout: layout.njk
---

# UserProfilePhoto

Object contains info on the user's profile photo.

```
userProfilePhotoEmpty#4f11bae1 = UserProfilePhoto;
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/userProfilePhotoEmpty">userProfilePhotoEmpty</a></td><td>Profile photo has not been set, or was hidden.</td></tr><tr><td><a href="/constructor/userProfilePhoto">userProfilePhoto</a></td><td>User profile photo.</td></tr></tbody></table>
