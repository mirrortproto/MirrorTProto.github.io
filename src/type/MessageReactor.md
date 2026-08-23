---
title: "MessageReactor"
original: "https://core.telegram.org/type/MessageReactor"
section: ref
description: "Info about a user in the paid Star reactions leaderboard for a message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageReactor","url":"/type/MessageReactor/"}]
layout: layout.njk
---

# MessageReactor

Info about a user in the [paid Star reactions leaderboard](/api/reactions/#paid-reactions) for a message.

```
messageReactor#4ba3a95a flags:# top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?Peer count:int = MessageReactor;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageReactor">messageReactor</a></td><td>Info about a user in the <a href="/api/reactions#paid-reactions">paid Star reactions leaderboard</a> for a message.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
