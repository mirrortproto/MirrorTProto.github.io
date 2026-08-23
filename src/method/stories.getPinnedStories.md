---
title: "stories.getPinnedStories"
original: "https://core.telegram.org/method/stories.getPinnedStories"
section: ref
description: "Fetch the stories pinned on a peer's profile."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getPinnedStories","url":"/method/stories.getPinnedStories/"}]
layout: layout.njk
---

# stories.getPinnedStories

Fetch the [stories](/api/stories/#pinned-or-archived-stories) pinned on a peer's profile.

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
---functions---
stories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer whose pinned stories should be fetched</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[stories.Stories](/type/stories.Stories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
