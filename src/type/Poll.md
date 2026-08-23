---
title: "Poll"
original: "https://core.telegram.org/type/Poll"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Poll","url":"/type/Poll/"}]
layout: layout.njk
---

# Poll

Indicates a poll message

```
poll#58747131 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/poll">poll</a></td><td>Poll</td></tr></tbody></table>
