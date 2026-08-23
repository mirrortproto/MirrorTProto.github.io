---
title: "messages.Reactions"
original: "https://core.telegram.org/type/messages.Reactions"
section: ref
description: "A set of message reactions"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.Reactions","url":"/type/messages.Reactions/"}]
layout: layout.njk
---

# messages.Reactions

A set of [message reactions](/api/reactions/)

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;

---functions---

messages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;
messages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;
messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.reactionsNotModified">messages.reactionsNotModified</a></td><td>The server-side list of <a href="/api/reactions">message reactions</a> hasn't changed</td></tr><tr><td><a href="/constructor/messages.reactions">messages.reactions</a></td><td>List of <a href="/api/reactions">message reactions</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getTopReactions">messages.getTopReactions</a></td><td>Got popular <a href="/api/reactions">message reactions</a></td></tr><tr><td><a href="/method/messages.getRecentReactions">messages.getRecentReactions</a></td><td>Get recently used <a href="/api/reactions">message reactions</a></td></tr><tr><td><a href="/method/messages.getDefaultTagReactions">messages.getDefaultTagReactions</a></td><td>Fetch a default recommended list of <a href="/api/saved-messages#tags">saved message tag reactions</a>.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
