---
title: "stories.foundStories"
original: "https://core.telegram.org/constructor/stories.foundStories"
section: ref
description: "Stories found using global story search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.foundStories","url":"/constructor/stories.foundStories/"}]
layout: layout.njk
---

# stories.foundStories

Stories found using [global story search »](/api/stories/#searching-stories).

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of results found for the query.</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/FoundStory">FoundStory</a>&gt;</td><td>Matching stories.</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Offset used to fetch the next page, if not set this is the final page.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[stories.FoundStories](/type/stories.FoundStories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
