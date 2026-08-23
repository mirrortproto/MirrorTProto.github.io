---
title: "updates.State"
original: "https://core.telegram.org/type/updates.State"
section: ref
description: "Object contains info on state for further updates."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.State","url":"/type/updates.State/"}]
layout: layout.njk
---

# updates.State

Object contains info on state for further updates.

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;

---functions---

updates.getState#edd4882a = updates.State;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/updates.state">updates.state</a></td><td>Updates state.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/updates.getState">updates.getState</a></td><td>Returns a current state of updates.</td></tr></tbody></table>
