---
title: "stories.FoundStories"
original: "https://core.telegram.org/type/stories.FoundStories"
section: ref
description: "Stories found using global story search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.FoundStories","url":"/type/stories.FoundStories/"}]
layout: layout.njk
---

# stories.FoundStories

Stories found using [global story search »](/api/stories/#searching-stories).

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;

---functions---

stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.foundStories">stories.foundStories</a></td><td>Stories found using <a href="/api/stories#searching-stories">global story search »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.searchPosts">stories.searchPosts</a></td><td>Globally search for <a href="/api/stories">stories</a> using a hashtag or a <a href="/api/stories#location-tags">location media area</a>, see <a href="/api/stories#searching-stories">here »</a> for more info on the full flow.<br><br>Either <code>hashtag</code> <strong>or</strong> <code>area</code> <strong>must</strong> be set when invoking the method.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
