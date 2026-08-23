---
title: "stories.AllStories"
original: "https://core.telegram.org/type/stories.AllStories"
section: ref
description: "Full list of active (or active and hidden) stories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.AllStories","url":"/type/stories.AllStories/"}]
layout: layout.njk
---

# stories.AllStories

Full list of active (or active and hidden) [stories](/api/stories/#watching-stories).

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;

---functions---

stories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.allStoriesNotModified">stories.allStoriesNotModified</a></td><td>The list of active (or active and hidden) <a href="/api/stories#watching-stories">stories</a> has not changed.</td></tr><tr><td><a href="/constructor/stories.allStories">stories.allStories</a></td><td>Full list of active (or active and hidden) <a href="/api/stories#watching-stories">stories</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getAllStories">stories.getAllStories</a></td><td>Fetch the List of active (or active and hidden) stories, see <a href="/api/stories#watching-stories">here »</a> for more info on watching stories.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
