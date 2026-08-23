---
title: "messages.DiscussionMessage"
original: "https://core.telegram.org/type/messages.DiscussionMessage"
section: ref
description: "Info about a message thread"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.DiscussionMessage","url":"/type/messages.DiscussionMessage/"}]
layout: layout.njk
---

# messages.DiscussionMessage

Info about a message thread

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;

---functions---

messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.discussionMessage">messages.discussionMessage</a></td><td>Information about a <a href="/api/threads">message thread</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDiscussionMessage">messages.getDiscussionMessage</a></td><td>Get <a href="/api/threads">discussion message</a> from the <a href="/api/discussion">associated discussion group</a> of a channel to show it on top of the comment section, without actually joining the group</td></tr></tbody></table>
