---
title: "contacts.importedContacts"
original: "https://core.telegram.org/constructor/contacts.importedContacts"
section: ref
description: "Info on successfully imported contacts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.importedContacts","url":"/constructor/contacts.importedContacts/"}]
layout: layout.njk
---

# contacts.importedContacts

Info on successfully imported contacts.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>imported</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ImportedContact">ImportedContact</a>&gt;</td><td>List of successfully imported contacts</td></tr><tr><td><strong>popular_invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PopularContact">PopularContact</a>&gt;</td><td>Popular contacts</td></tr><tr><td><strong>retry_contacts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>List of contact ids that could not be imported due to system limitation and will need to be imported at a later date.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>List of users</td></tr></tbody></table>

### Type

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)
