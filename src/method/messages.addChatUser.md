---
title: "messages.addChatUser"
original: "https://core.telegram.org/method/messages.addChatUser"
section: ref
description: "Adds a user to a chat and sends a service message on it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.addChatUser","url":"/method/messages.addChatUser/"}]
layout: layout.njk
---

# messages.addChatUser

Adds a user to a chat and sends a service message on it.

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;
---functions---
messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Chat ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>User ID to be added</td></tr><tr><td><strong>fwd_limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of last messages to be forwarded</td></tr></tbody></table>

### Result

[messages.InvitedUsers](/type/messages.InvitedUsers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_GROUPS_BLOCKED</td><td>This bot can't be added to groups.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_MEMBER_ADD_FAILED</td><td>Could not add participants.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>The maximum number of users has been exceeded (to create a chat, for example).</td></tr><tr><td>400</td><td>USER_ALREADY_PARTICIPANT</td><td>The user is already in the group.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>400</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr><tr><td>403</td><td>USER_NOT_MUTUAL_CONTACT</td><td>The provided user is not a mutual contact.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>The user's privacy settings do not allow you to do this.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>You blocked this user.</td></tr></tbody></table>
