---
title: "Stories.Albums"
original: "https://core.telegram.org/type/stories.Albums"
section: ref
description: "Represents a list of story albums »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Stories.Albums","url":"/type/stories.Albums/"}]
layout: layout.njk
---

# Stories.Albums

Represents a list of [story albums »](/api/stories/#story-albums).

```
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;

---functions---

stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.albumsNotModified">stories.albumsNotModified</a></td><td>The <a href="/api/stories#story-albums">story album list »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/stories.albums">stories.albums</a></td><td><a href="/api/stories#story-albums">Story albums »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getAlbums">stories.getAlbums</a></td><td>Get <a href="/api/stories#story-albums">story albums</a> created by a peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
