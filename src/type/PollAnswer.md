---
title: "PollAnswer"
original: "https://core.telegram.org/type/PollAnswer"
section: ref
description: "Indicates a possible answer to a poll."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PollAnswer","url":"/type/PollAnswer/"}]
layout: layout.njk
---

# PollAnswer

Indicates a possible answer to a [poll](/type/Poll/).

```
pollAnswer#ff16e2ca text:TextWithEntities option:bytes = PollAnswer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/pollAnswer">pollAnswer</a></td><td>A possible answer of a poll</td></tr><tr><td><a href="/constructor/inputPollAnswer">inputPollAnswer</a></td><td>An answer option to add to an <a href="/api/poll#open-answer-polls">open-answer poll »</a></td></tr></tbody></table>

### Related pages

#### [Poll](/type/Poll/)

Indicates a poll message
