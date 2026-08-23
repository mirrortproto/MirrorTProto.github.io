---
title: "photos.Photos"
original: "https://core.telegram.org/type/photos.Photos"
section: ref
description: "Object contains list of photos with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photos.Photos","url":"/type/photos.Photos/"}]
layout: layout.njk
---

# photos.Photos

Object contains list of photos with auxiliary data.

```
photos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;

---functions---

photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photos">photos.photos</a></td><td>Full list of photos with auxiliary data.</td></tr><tr><td><a href="/constructor/photos.photosSlice">photos.photosSlice</a></td><td>Incomplete list of photos with auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/photos.getUserPhotos">photos.getUserPhotos</a></td><td>Returns the list of user photos.</td></tr></tbody></table>
