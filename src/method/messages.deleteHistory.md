---
title: "messages.deleteHistory"
original: "https://core.telegram.org/method/messages.deleteHistory"
section: ref
description: "Deletes communication history."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteHistory","url":"/method/messages.deleteHistory/"}]
layout: layout.njk
---

# messages.deleteHistory

Deletes communication history.

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>just_clear</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Just clear history for the current user, without actually removing messages for every chat user</td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether to delete the message history for all chat participants</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>User or chat, communication history of which will be deleted</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum ID of message to delete</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Delete all messages newer than this UNIX timestamp</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Delete all messages older than this UNIX timestamp</td></tr></tbody></table>

### Result

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_REVOKE_DATE_UNSUPPORTED</td><td><code>min_date</code> and <code>max_date</code> are not available for using with non-user peers.</td></tr><tr><td>400</td><td>MAX_DATE_INVALID</td><td>The specified maximum date is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MIN_DATE_INVALID</td><td>The specified minimum date is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
