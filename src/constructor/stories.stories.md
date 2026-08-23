---
title: "stories.stories"
original: "https://core.telegram.org/constructor/stories.stories"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.stories","url":"/constructor/stories.stories/"}]
layout: layout.njk
---

# stories.stories

List of [stories](/api/stories/#pinned-or-archived-stories)

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of stories that can be fetched</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StoryItem">StoryItem</a>&gt;</td><td>Stories</td></tr><tr><td><strong>pinned_to_top</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>IDs of pinned stories.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[stories.Stories](/type/stories.Stories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
