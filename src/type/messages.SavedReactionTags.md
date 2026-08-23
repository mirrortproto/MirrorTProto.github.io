---
title: "messages.SavedReactionTags"
original: "https://core.telegram.org/type/messages.SavedReactionTags"
section: ref
description: "List of reaction tag » names assigned by the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SavedReactionTags","url":"/type/messages.SavedReactionTags/"}]
layout: layout.njk
---

# messages.SavedReactionTags

List of [reaction tag »](/api/saved-messages/#tags) names assigned by the user.

```
messages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;

---functions---

messages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedReactionTagsNotModified">messages.savedReactionTagsNotModified</a></td><td>The list of <a href="/api/saved-messages#tags">reaction tag »</a> names assigned by the user hasn't changed.</td></tr><tr><td><a href="/constructor/messages.savedReactionTags">messages.savedReactionTags</a></td><td>List of <a href="/api/saved-messages#tags">reaction tag »</a> names assigned by the user.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedReactionTags">messages.getSavedReactionTags</a></td><td>Fetch the full list of <a href="/api/saved-messages#tags">saved message tags</a> created by the user.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
