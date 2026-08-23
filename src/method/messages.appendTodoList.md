---
title: "messages.appendTodoList"
original: "https://core.telegram.org/method/messages.appendTodoList"
section: ref
description: "Appends one or more items to a todo list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.appendTodoList","url":"/method/messages.appendTodoList/"}]
layout: layout.njk
---

# messages.appendTodoList

Appends one or more items to a [todo list »](/api/todo/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the todo list was posted.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the message with the todo list.</td></tr><tr><td><strong>list</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/TodoItem">TodoItem</a>&gt;</td><td>Items to append.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TODO_ITEM_DUPLICATE</td><td>Duplicate <a href="/api/todo">checklist items</a> detected.</td></tr><tr><td>400</td><td>TODO_NOT_MODIFIED</td><td>No todo items were specified, so no changes were made to the todo list.</td></tr></tbody></table>

### Related pages

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
