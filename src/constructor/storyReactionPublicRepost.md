---
title: "storyReactionPublicRepost"
original: "https://core.telegram.org/constructor/storyReactionPublicRepost"
section: ref
description: "A certain peer has reposted the story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyReactionPublicRepost","url":"/constructor/storyReactionPublicRepost/"}]
layout: layout.njk
---

# storyReactionPublicRepost

A certain peer has reposted the story.

```
storyReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The peer that reposted the story.</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/type/StoryItem">StoryItem</a></td><td>The reposted story.</td></tr></tbody></table>

### Type

[StoryReaction](/type/StoryReaction/)
