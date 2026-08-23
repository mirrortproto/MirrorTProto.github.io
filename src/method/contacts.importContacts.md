---
title: "contacts.importContacts"
original: "https://core.telegram.org/method/contacts.importContacts"
section: ref
description: "Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.importContacts","url":"/method/contacts.importContacts/"}]
layout: layout.njk
---

# contacts.importContacts

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
---functions---
contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputContact">InputContact</a>&gt;</td><td>List of contacts to import</td></tr></tbody></table>

### Result

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)

### Only users can use this method

### Related pages

#### [contacts.addContact](/method/contacts.addContact/)

Add an existing telegram user as contact.

Use [contacts.importContacts](/method/contacts.importContacts/) to add contacts by phone number, without knowing their Telegram ID.
