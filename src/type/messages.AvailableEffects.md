---
title: "messages.AvailableEffects"
original: "https://core.telegram.org/type/messages.AvailableEffects"
section: ref
description: "Full list of usable animated message effects »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.AvailableEffects","url":"/type/messages.AvailableEffects/"}]
layout: layout.njk
---

# messages.AvailableEffects

Full list of usable [animated message effects »](/api/effects/).

```
messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;

---functions---

messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.availableEffectsNotModified">messages.availableEffectsNotModified</a></td><td>The full list of usable <a href="/api/effects">animated message effects »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/messages.availableEffects">messages.availableEffects</a></td><td>The full list of usable <a href="/api/effects">animated message effects »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAvailableEffects">messages.getAvailableEffects</a></td><td>Fetch the full list of usable <a href="/api/effects">animated message effects »</a>.</td></tr></tbody></table>

### Related pages

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.
