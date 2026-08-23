---
title: "stories.Stories"
original: "https://core.telegram.org/type/stories.Stories"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.Stories","url":"/type/stories.Stories/"}]
layout: layout.njk
---

# stories.Stories

List of [stories](/api/stories/#pinned-or-archived-stories)

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;

---functions---

stories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.stories">stories.stories</a></td><td>List of <a href="/api/stories#pinned-or-archived-stories">stories</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getPinnedStories">stories.getPinnedStories</a></td><td>Fetch the <a href="/api/stories#pinned-or-archived-stories">stories</a> pinned on a peer's profile.</td></tr><tr><td><a href="/method/stories.getStoriesArchive">stories.getStoriesArchive</a></td><td>Fetch the <a href="/api/stories#pinned-or-archived-stories">story archive »</a> of a peer we control.</td></tr><tr><td><a href="/method/stories.getStoriesByID">stories.getStoriesByID</a></td><td>Obtain full info about a set of <a href="/api/stories">stories</a> by their IDs.</td></tr><tr><td><a href="/method/stories.getAlbumStories">stories.getAlbumStories</a></td><td>Get stories in a <a href="/api/stories#story-albums">story album »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
