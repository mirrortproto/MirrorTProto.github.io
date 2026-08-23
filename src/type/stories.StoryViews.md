---
title: "stories.StoryViews"
original: "https://core.telegram.org/type/stories.StoryViews"
section: ref
description: "Reaction and view counters for a list of stories"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.StoryViews","url":"/type/stories.StoryViews/"}]
layout: layout.njk
---

# stories.StoryViews

Reaction and view counters for a list of [stories](/api/stories/)

```
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;

---functions---

stories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyViews">stories.storyViews</a></td><td>Reaction and view counters for a list of <a href="/api/stories">stories</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoriesViews">stories.getStoriesViews</a></td><td>Obtain info about the view count, forward count, reactions and recent viewers of one or more <a href="/api/stories">stories</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
