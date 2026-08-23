---
title: "PostInteractionCounters"
original: "https://core.telegram.org/type/PostInteractionCounters"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PostInteractionCounters","url":"/type/PostInteractionCounters/"}]
layout: layout.njk
---

# PostInteractionCounters

Interaction counters

```
postInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;
postInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/postInteractionCountersMessage">postInteractionCountersMessage</a></td><td>Interaction counters for a message.</td></tr><tr><td><a href="/constructor/postInteractionCountersStory">postInteractionCountersStory</a></td><td>Interaction counters for a story.</td></tr></tbody></table>
