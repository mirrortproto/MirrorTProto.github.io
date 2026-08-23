---
title: "stories.getStoriesByID"
original: "https://core.telegram.org/method/stories.getStoriesByID"
section: ref
description: "Obtain full info about a set of stories by their IDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoriesByID","url":"/method/stories.getStoriesByID/"}]
layout: layout.njk
---

# stories.getStoriesByID

Obtain full info about a set of [stories](/api/stories/) by their IDs.

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
---functions---
stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the stories were posted</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Story IDs</td></tr></tbody></table>

### Result

[stories.Stories](/type/stories.Stories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORIES_NEVER_CREATED</td><td>This peer hasn't ever posted any stories.</td></tr><tr><td>400</td><td>STORY_ID_EMPTY</td><td>You specified no story IDs.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
