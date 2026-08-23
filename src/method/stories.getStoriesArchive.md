---
title: "stories.getStoriesArchive"
original: "https://core.telegram.org/method/stories.getStoriesArchive"
section: ref
description: "Fetch the story archive » of a peer we control."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoriesArchive","url":"/method/stories.getStoriesArchive/"}]
layout: layout.njk
---

# stories.getStoriesArchive

Fetch the [story archive »](/api/stories/#pinned-or-archived-stories) of a peer we control.

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
---functions---
stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer whose archived stories should be fetched</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[stories.Stories](/type/stories.Stories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
