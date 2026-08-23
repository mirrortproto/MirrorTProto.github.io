---
title: "contacts.addContact"
original: "https://core.telegram.org/method/contacts.addContact"
section: ref
description: "Add an existing telegram user as contact."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.addContact","url":"/method/contacts.addContact/"}]
layout: layout.njk
---

# contacts.addContact

Add an existing telegram user as contact.

Use [contacts.importContacts](/method/contacts.importContacts/) to add contacts by phone number, without knowing their Telegram ID.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>add_phone_privacy_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Allow the other user to see our phone number?</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Telegram ID of the other user</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>First name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Last name</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>User's phone number, may be omitted to simply add the user to the contact list, without a phone number.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>A private note for this contact, only visible to us; see <a href="/api/contacts#private-notes-for-contacts">here »</a> for more info on contact notes.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CONTACT_ID_INVALID</td><td>The provided contact ID is invalid.</td></tr><tr><td>400</td><td>CONTACT_NAME_EMPTY</td><td>Contact name empty.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Contact list](/api/contacts/)

Working with contacts.

#### [contacts.importContacts](/method/contacts.importContacts/)

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number.
