---
title: "storyViewPublicRepost"
original: "https://core.telegram.org/constructor/storyViewPublicRepost"
section: ref
description: "A certain peer has reposted the story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyViewPublicRepost","url":"/constructor/storyViewPublicRepost/"}]
layout: layout.njk
---

# storyViewPublicRepost

A certain peer has reposted the story.

```
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether we have <a href="/api/block">completely blocked</a> this user, including from viewing more of our stories.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether we have <a href="/api/block">blocked</a> this user from viewing more of our stories.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The peer that reposted the story.</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/type/StoryItem">StoryItem</a></td><td>The reposted story.</td></tr></tbody></table>

### Type

[StoryView](/type/StoryView/)

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.
