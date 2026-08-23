---
title: "contacts.Contacts"
original: "https://core.telegram.org/type/contacts.Contacts"
section: ref
description: "Info on the current user's contact list."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Contacts","url":"/type/contacts.Contacts/"}]
layout: layout.njk
---

# contacts.Contacts

Info on the current user's contact list.

```
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;

---functions---

contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.contactsNotModified">contacts.contactsNotModified</a></td><td>Contact list on the server is the same as the list on the client.</td></tr><tr><td><a href="/constructor/contacts.contacts">contacts.contacts</a></td><td>The current user's contact list and info on users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getContacts">contacts.getContacts</a></td><td>Returns the current user's contact list.</td></tr></tbody></table>
