---
title: "messages.Messages"
original: "https://core.telegram.org/type/messages.Messages"
section: ref
description: "Object contains information on list of messages with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.Messages","url":"/type/messages.Messages/"}]
layout: layout.njk
---

# messages.Messages

Object contains information on list of messages with auxiliary data.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;

---functions---

messages.getMessages#63c66506 id:Vector<InputMessage> = messages.Messages;
messages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
messages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.getRecentLocations#702a40e0 peer:InputPeer limit:int hash:long = messages.Messages;
messages.getScheduledHistory#f516760b peer:InputPeer hash:long = messages.Messages;
messages.getScheduledMessages#bdbb0464 peer:InputPeer id:Vector<int> = messages.Messages;
messages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.searchSentMedia#107e31a0 q:string filter:MessagesFilter limit:int = messages.Messages;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getQuickReplyMessages#94a495c3 flags:# shortcut_id:int id:flags.0?Vector<int> hash:long = messages.Messages;

channels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messages">messages.messages</a></td><td>Full list of messages with auxiliary data.</td></tr><tr><td><a href="/constructor/messages.messagesSlice">messages.messagesSlice</a></td><td>Incomplete list of messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.channelMessages">messages.channelMessages</a></td><td>Channel messages</td></tr><tr><td><a href="/constructor/messages.messagesNotModified">messages.messagesNotModified</a></td><td>No new messages matching the query were found</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessages">messages.getMessages</a></td><td>Returns the list of messages by their IDs.</td></tr><tr><td><a href="/method/messages.getHistory">messages.getHistory</a></td><td>Returns the message history in a peer.<br><br>Results are ordered by date (descending).</td></tr><tr><td><a href="/method/messages.search">messages.search</a></td><td>Search for messages.</td></tr><tr><td><a href="/method/messages.searchGlobal">messages.searchGlobal</a></td><td>Search for messages and peers globally</td></tr><tr><td><a href="/method/messages.getUnreadMentions">messages.getUnreadMentions</a></td><td>Get unread messages where we were mentioned</td></tr><tr><td><a href="/method/messages.getRecentLocations">messages.getRecentLocations</a></td><td>Get all recent <a href="/api/live-location">live locations</a> sent to a specific chat: returns up to 1 location message (<a href="/constructor/messageMediaGeoLive">messageMediaGeoLive</a>) per chat participant.</td></tr><tr><td><a href="/method/messages.getScheduledHistory">messages.getScheduledHistory</a></td><td>Get scheduled messages</td></tr><tr><td><a href="/method/messages.getScheduledMessages">messages.getScheduledMessages</a></td><td>Get scheduled messages</td></tr><tr><td><a href="/method/messages.getReplies">messages.getReplies</a></td><td>Get messages in a reply thread</td></tr><tr><td><a href="/method/messages.getUnreadReactions">messages.getUnreadReactions</a></td><td>Get unread reactions to messages you sent</td></tr><tr><td><a href="/method/messages.searchSentMedia">messages.searchSentMedia</a></td><td>View and search recently sent media.<br>This method does not support pagination.</td></tr><tr><td><a href="/method/messages.getSavedHistory">messages.getSavedHistory</a></td><td>Fetch <a href="/api/saved-messages">saved messages »</a> forwarded from a specific peer, or fetch messages from a <a href="/api/monoforum">monoforum topic »</a>.</td></tr><tr><td><a href="/method/messages.getQuickReplyMessages">messages.getQuickReplyMessages</a></td><td>Fetch (a subset or all) messages in a <a href="/api/business#quick-reply-shortcuts">quick reply shortcut »</a>.</td></tr><tr><td><a href="/method/messages.getUnreadPollVotes">messages.getUnreadPollVotes</a></td><td>Get messages containing polls with <a href="/api/poll#unread-poll-votes">unread votes »</a></td></tr><tr><td><a href="/method/messages.getPersonalChannelHistory">messages.getPersonalChannelHistory</a></td><td>Fetch the message history of a user's <a href="/api/profile#personal-channel">personal channel »</a>.</td></tr><tr><td><a href="/method/channels.getMessages">channels.getMessages</a></td><td>Get <a href="/api/channel">channel/supergroup</a> messages</td></tr><tr><td><a href="/method/channels.searchPosts">channels.searchPosts</a></td><td>Globally search for posts from public <a href="/api/channel">channels »</a> (<em>including</em> those we aren't a member of) containing either a specific hashtag, <em>or</em> a full text query.<br><br>Exactly one of <code>query</code> and <code>hashtag</code> must be set.</td></tr></tbody></table>
