---
title: "StoryView"
original: "https://core.telegram.org/type/StoryView"
section: ref
description: "Story view date and reaction information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryView","url":"/type/StoryView/"}]
layout: layout.njk
---

# StoryView

[Story](/api/stories/) view date and reaction information

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyView">storyView</a></td><td><a href="/api/stories">Story</a> view date and reaction information</td></tr><tr><td><a href="/constructor/storyViewPublicForward">storyViewPublicForward</a></td><td>A certain peer has forwarded the story as a message to a public chat or channel.</td></tr><tr><td><a href="/constructor/storyViewPublicRepost">storyViewPublicRepost</a></td><td>A certain peer has reposted the story.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
