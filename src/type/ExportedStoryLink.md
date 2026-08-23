---
title: "ExportedStoryLink"
original: "https://core.telegram.org/type/ExportedStoryLink"
section: ref
description: "Represents a story deep link"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedStoryLink","url":"/type/ExportedStoryLink/"}]
layout: layout.njk
---

# ExportedStoryLink

Represents a [story deep link](/api/stories/#story-links)

```
exportedStoryLink#3fc9053b link:string = ExportedStoryLink;

---functions---

stories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedStoryLink">exportedStoryLink</a></td><td>Represents a <a href="/api/stories#story-links">story deep link</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.exportStoryLink">stories.exportStoryLink</a></td><td>Generate a <a href="/api/links#story-links">story deep link</a> for a specific story</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
