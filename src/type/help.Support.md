---
title: "help.Support"
original: "https://core.telegram.org/type/help.Support"
section: ref
description: "Info about the support user, relevant to the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.Support","url":"/type/help.Support/"}]
layout: layout.njk
---

# help.Support

Info about the support user, relevant to the current user.

```
help.support#17c6b5f6 phone_number:string user:User = help.Support;

---functions---

help.getSupport#9cdf08cd = help.Support;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.support">help.support</a></td><td>Info on support user.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getSupport">help.getSupport</a></td><td>Returns the support user for the "ask a question" feature.</td></tr></tbody></table>
