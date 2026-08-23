---
title: "updates.Difference"
original: "https://core.telegram.org/type/updates.Difference"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.Difference","url":"/type/updates.Difference/"}]
layout: layout.njk
---

# updates.Difference

Occurred changes.

```
updates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
updates.differenceTooLong#4afe8f6d pts:int = updates.Difference;

---functions---

updates.getDifference#19c2f763 flags:# pts:int pts_limit:flags.1?int pts_total_limit:flags.0?int date:int qts:int qts_limit:flags.2?int = updates.Difference;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/updates.differenceEmpty">updates.differenceEmpty</a></td><td>No events.</td></tr><tr><td><a href="/constructor/updates.difference">updates.difference</a></td><td>Full list of occurred events.</td></tr><tr><td><a href="/constructor/updates.differenceSlice">updates.differenceSlice</a></td><td>Incomplete list of occurred events.</td></tr><tr><td><a href="/constructor/updates.differenceTooLong">updates.differenceTooLong</a></td><td>The difference is <a href="/api/updates#recovering-gaps">too long</a>, and the specified state must be used to refetch updates.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/updates.getDifference">updates.getDifference</a></td><td>Get new <a href="/api/updates">updates</a>.</td></tr></tbody></table>
