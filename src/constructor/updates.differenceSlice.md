---
title: "updates.differenceSlice"
original: "https://core.telegram.org/constructor/updates.differenceSlice"
section: ref
description: "Incomplete list of occurred events."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.differenceSlice","url":"/constructor/updates.differenceSlice/"}]
layout: layout.njk
---

# updates.differenceSlice

Incomplete list of occurred events.

```
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>List of new messages</td></tr><tr><td><strong>new_encrypted_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/EncryptedMessage">EncryptedMessage</a>&gt;</td><td>New messages from the <a href="/api/updates">encrypted event sequence</a></td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Update">Update</a>&gt;</td><td>List of updates</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>List of chats mentioned in events</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>List of users mentioned in events</td></tr><tr><td><strong>intermediate_state</strong></td><td style="text-align: center;"><a href="/type/updates.State">updates.State</a></td><td>Intermediary state</td></tr></tbody></table>

### Type

[updates.Difference](/type/updates.Difference/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
