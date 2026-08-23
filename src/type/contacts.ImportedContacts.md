---
title: "contacts.ImportedContacts"
original: "https://core.telegram.org/type/contacts.ImportedContacts"
section: ref
description: "Object contains info on successfully imported contacts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.ImportedContacts","url":"/type/contacts.ImportedContacts/"}]
layout: layout.njk
---

# contacts.ImportedContacts

Object contains info on successfully imported contacts.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;

---functions---

contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.importedContacts">contacts.importedContacts</a></td><td>Info on successfully imported contacts.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.importContacts">contacts.importContacts</a></td><td>Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.<br><br>Use <a href="/method/contacts.addContact">contacts.addContact</a> to add Telegram contacts without actually using their phone number.</td></tr></tbody></table>
