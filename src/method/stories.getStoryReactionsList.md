---
title: "stories.getStoryReactionsList"
original: "https://core.telegram.org/method/stories.getStoryReactionsList"
section: ref
description: "Get the reaction and interaction list of a story posted to a channel, along with the sender of each reaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoryReactionsList","url":"/method/stories.getStoryReactionsList/"}]
layout: layout.njk
---

# stories.getStoryReactionsList

Get the [reaction](/api/reactions/) and interaction list of a [story](/api/stories/) posted to a channel, along with the sender of each reaction.

Can only be used by channel admins.

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;
---functions---
stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>forwards_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Channel</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/stories">Story</a> ID</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Reaction">Reaction</a></td><td>Get only reactions of this type</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Offset for pagination (taken from the <code>next_offset</code> field of the returned <a href="/type/stories.StoryReactionsList">stories.StoryReactionsList</a>); empty in the first request.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[stories.StoryReactionsList](/type/stories.StoryReactionsList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [stories.StoryReactionsList](/type/stories.StoryReactionsList/)

List of peers that reacted to a specific [story](/api/stories/)

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
