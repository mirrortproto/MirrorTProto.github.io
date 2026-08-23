---
title: "contacts.contacts"
original: "https://core.telegram.org/constructor/contacts.contacts"
section: ref
description: "The current user's contact list and info on users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.contacts","url":"/constructor/contacts.contacts/"}]
layout: layout.njk
---

# contacts.contacts

The current user's contact list and info on users.

```
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Contact">Contact</a>&gt;</td><td>Contact list</td></tr><tr><td><strong>saved_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of contacts that were saved successfully</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>User list</td></tr></tbody></table>

### Type

[contacts.Contacts](/type/contacts.Contacts/)
