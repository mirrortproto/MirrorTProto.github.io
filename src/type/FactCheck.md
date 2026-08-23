---
title: "FactCheck"
original: "https://core.telegram.org/type/FactCheck"
section: ref
description: "Represents a fact-check » created by an independent fact-checker."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"FactCheck","url":"/type/FactCheck/"}]
layout: layout.njk
---

# FactCheck

Represents a [fact-check »](/api/factcheck/) created by an independent fact-checker.

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/factCheck">factCheck</a></td><td>Represents a <a href="/api/factcheck">fact-check »</a> created by an independent fact-checker.</td></tr></tbody></table>

### Related pages

#### [Fact checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.
