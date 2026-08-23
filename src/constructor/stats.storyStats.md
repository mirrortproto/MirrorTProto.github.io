---
title: "stats.storyStats"
original: "https://core.telegram.org/constructor/stats.storyStats"
section: ref
description: "Contains statistics about a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stats.storyStats","url":"/constructor/stats.storyStats/"}]
layout: layout.njk
---

# stats.storyStats

Contains [statistics](/api/stats/) about a [story](/api/stories/).

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>views_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>A graph containing the number of story views and shares</td></tr><tr><td><strong>reactions_by_emotion_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>A bar graph containing the number of story reactions categorized by "emotion" (i.e. Positive, Negative, Other, etc...)</td></tr></tbody></table>

### Type

[stats.StoryStats](/type/stats.StoryStats/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
