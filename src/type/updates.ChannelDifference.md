---
title: "updates.ChannelDifference"
original: "https://core.telegram.org/type/updates.ChannelDifference"
section: ref
description: "Contains the difference (new messages) between our local channel state and the remote state"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.ChannelDifference","url":"/type/updates.ChannelDifference/"}]
layout: layout.njk
---

# updates.ChannelDifference

Contains the difference (new messages) between our local channel state and the remote state

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;

---functions---

updates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/updates.channelDifferenceEmpty">updates.channelDifferenceEmpty</a></td><td>There are no new updates</td></tr><tr><td><a href="/constructor/updates.channelDifferenceTooLong">updates.channelDifferenceTooLong</a></td><td>The passed <code>pts</code> is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel.<br><br>For supergroups/channels, this usually happens for updates older than <code>latestPts - 100000</code> (though do not rely on this value, it's a server-side implementation detail that may change, and should not be used by clients in any way).</td></tr><tr><td><a href="/constructor/updates.channelDifference">updates.channelDifference</a></td><td>The new updates</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/updates.getChannelDifference">updates.getChannelDifference</a></td><td>Returns the difference between the current state of updates of a certain channel and transmitted.</td></tr></tbody></table>
