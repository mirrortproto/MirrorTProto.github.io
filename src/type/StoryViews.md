---
title: "StoryViews"
original: "https://core.telegram.org/type/StoryViews"
section: ref
description: "Aggregated view and reaction information of a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryViews","url":"/type/StoryViews/"}]
layout: layout.njk
---

# StoryViews

Aggregated view and reaction information of a [story](/api/stories/)

```
storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyViews">storyViews</a></td><td>Aggregated view and reaction information of a <a href="/api/stories">story</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
