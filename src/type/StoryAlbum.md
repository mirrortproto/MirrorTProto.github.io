---
title: "StoryAlbum"
original: "https://core.telegram.org/type/StoryAlbum"
section: ref
description: "Represents a story album »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryAlbum","url":"/type/StoryAlbum/"}]
layout: layout.njk
---

# StoryAlbum

Represents a [story album »](/api/stories/#story-albums).

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;

---functions---

stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyAlbum">storyAlbum</a></td><td>Represents a <a href="/api/stories#story-albums">story album »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.createAlbum">stories.createAlbum</a></td><td>Creates a <a href="/api/stories#story-albums">story album</a>.</td></tr><tr><td><a href="/method/stories.updateAlbum">stories.updateAlbum</a></td><td>Rename a <a href="/api/stories#story-albums">story albums »</a>, or add, delete or reorder stories in it.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
