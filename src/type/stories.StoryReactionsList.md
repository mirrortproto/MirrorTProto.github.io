---
title: "stories.StoryReactionsList"
original: "https://core.telegram.org/type/stories.StoryReactionsList"
section: ref
description: "List of peers that reacted to a specific story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.StoryReactionsList","url":"/type/stories.StoryReactionsList/"}]
layout: layout.njk
---

# stories.StoryReactionsList

List of peers that reacted to a specific [story](/api/stories/)

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;

---functions---

stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyReactionsList">stories.storyReactionsList</a></td><td>List of peers that reacted to or intercated with a specific <a href="/api/stories">story</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryReactionsList">stories.getStoryReactionsList</a></td><td>Get the <a href="/api/reactions">reaction</a> and interaction list of a <a href="/api/stories">story</a> posted to a channel, along with the sender of each reaction.<br><br>Can only be used by channel admins.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
