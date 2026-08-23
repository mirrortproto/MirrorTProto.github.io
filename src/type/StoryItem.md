---
title: "StoryItem"
original: "https://core.telegram.org/type/StoryItem"
section: ref
description: "Represents a Telegram Story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryItem","url":"/type/StoryItem/"}]
layout: layout.njk
---

# StoryItem

Represents a [Telegram Story](/api/stories/)

```
storyItemDeleted#51e6ee4f id:int = StoryItem;
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyItemDeleted">storyItemDeleted</a></td><td>Represents a previously active story, that was deleted</td></tr><tr><td><a href="/constructor/storyItemSkipped">storyItemSkipped</a></td><td>Represents an active story, whose full information was omitted for space and performance reasons; use <a href="/method/stories.getStoriesByID">stories.getStoriesByID</a> to fetch full info about the skipped story when and if needed.</td></tr><tr><td><a href="/constructor/storyItem">storyItem</a></td><td>Represents a <a href="/api/stories">story</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
