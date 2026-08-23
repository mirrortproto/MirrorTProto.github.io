---
title: "reactionCount"
original: "https://core.telegram.org/constructor/reactionCount"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"reactionCount","url":"/constructor/reactionCount/"}]
layout: layout.njk
---

# reactionCount

Reactions

```
reactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chosen_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>If set, indicates that the current user also sent this reaction.<br>The integer value indicates when was the reaction added: the bigger the value, the newer the reaction.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>The reaction.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of users that reacted with this emoji.</td></tr></tbody></table>

### Type

[ReactionCount](/type/ReactionCount/)
