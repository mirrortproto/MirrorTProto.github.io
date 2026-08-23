---
title: "photos.Photo"
original: "https://core.telegram.org/type/photos.Photo"
section: ref
description: "Photo with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photos.Photo","url":"/type/photos.Photo/"}]
layout: layout.njk
---

# photos.Photo

Photo with auxiliary data.

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;

---functions---

photos.updateProfilePhoto#9e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;
photos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;
photos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photo">photos.photo</a></td><td>Photo with auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/photos.updateProfilePhoto">photos.updateProfilePhoto</a></td><td>Installs a previously uploaded photo as a profile photo.</td></tr><tr><td><a href="/method/photos.uploadProfilePhoto">photos.uploadProfilePhoto</a></td><td>Updates current user profile photo.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr><tr><td><a href="/method/photos.uploadContactProfilePhoto">photos.uploadContactProfilePhoto</a></td><td>Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr></tbody></table>
