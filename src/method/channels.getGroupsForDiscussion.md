---
title: "channels.getGroupsForDiscussion"
original: "https://core.telegram.org/method/channels.getGroupsForDiscussion"
section: ref
description: "Get all groups that can be used as discussion groups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getGroupsForDiscussion","url":"/method/channels.getGroupsForDiscussion/"}]
layout: layout.njk
---

# channels.getGroupsForDiscussion

Get all groups that can be used as [discussion groups](/api/discussion/).

Returned [basic group chats](/api/channel/#basic-groups) must be first upgraded to [supergroups](/api/channel/#supergroups) before they can be set as a discussion group.  
To set a returned supergroup as a discussion group, access to its old messages must be enabled using [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/), first.

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;
```

### Parameters

This constructor does not require any parameters.

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Related pages

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/)

Hide/unhide message history for new channel/supergroup users
