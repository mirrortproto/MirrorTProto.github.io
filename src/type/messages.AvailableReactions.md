---
title: "messages.AvailableReactions"
original: "https://core.telegram.org/type/messages.AvailableReactions"
section: ref
description: "Animations and metadata associated with message reactions »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.AvailableReactions","url":"/type/messages.AvailableReactions/"}]
layout: layout.njk
---

# messages.AvailableReactions

Animations and metadata associated with [message reactions »](/api/reactions/)

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;

---functions---

messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.availableReactionsNotModified">messages.availableReactionsNotModified</a></td><td>No new reactions are available</td></tr><tr><td><a href="/constructor/messages.availableReactions">messages.availableReactions</a></td><td>Animations and metadata associated with <a href="/api/reactions">message reactions »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAvailableReactions">messages.getAvailableReactions</a></td><td>Obtain available <a href="/api/reactions">message reactions »</a></td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
