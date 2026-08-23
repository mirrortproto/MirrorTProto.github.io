---
title: "Stats.StoryStats"
original: "https://core.telegram.org/type/stats.StoryStats"
section: ref
description: "Contains statistics about a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Stats.StoryStats","url":"/type/stats.StoryStats/"}]
layout: layout.njk
---

# Stats.StoryStats

Contains [statistics](/api/stats/) about a [story](/api/stories/).

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;

---functions---

stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stats.storyStats">stats.storyStats</a></td><td>Contains <a href="/api/stats">statistics</a> about a <a href="/api/stories">story</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.getStoryStats">stats.getStoryStats</a></td><td>Get <a href="/api/stats">statistics</a> for a certain <a href="/api/stories">story</a>.</td></tr></tbody></table>

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
