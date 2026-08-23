---
title: "ChatReactions"
original: "https://core.telegram.org/type/ChatReactions"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChatReactions","url":"/type/ChatReactions/"}]
layout: layout.njk
---

# ChatReactions

Available chat reactions

```
chatReactionsNone#eafc32bc = ChatReactions;
chatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;
chatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/chatReactionsNone">chatReactionsNone</a></td><td>No reactions are allowed</td></tr><tr><td><a href="/constructor/chatReactionsAll">chatReactionsAll</a></td><td>All reactions or all non-custom reactions are allowed</td></tr><tr><td><a href="/constructor/chatReactionsSome">chatReactionsSome</a></td><td>Some reactions are allowed</td></tr></tbody></table>
