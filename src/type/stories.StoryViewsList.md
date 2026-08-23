---
title: "stories.StoryViewsList"
original: "https://core.telegram.org/type/stories.StoryViewsList"
section: ref
description: "Reaction and view counters for a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.StoryViewsList","url":"/type/stories.StoryViewsList/"}]
layout: layout.njk
---

# stories.StoryViewsList

Reaction and view counters for a [story](/api/stories/)

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;

---functions---

stories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyViewsList">stories.storyViewsList</a></td><td>Reaction and view counters for a <a href="/api/stories">story</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryViewsList">stories.getStoryViewsList</a></td><td>Obtain the list of users that have viewed a specific <a href="/api/stories">story we posted</a></td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
