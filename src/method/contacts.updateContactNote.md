---
title: "contacts.updateContactNote"
original: "https://core.telegram.org/method/contacts.updateContactNote"
section: ref
description: "Update the private note associated to a contact; see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.updateContactNote","url":"/method/contacts.updateContactNote/"}]
layout: layout.njk
---

# contacts.updateContactNote

Update the private note associated to a contact; see [here »](/api/contacts/#private-notes-for-contacts) for more info.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The contact.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>The note.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CONTACT_ID_INVALID</td><td>The provided contact ID is invalid.</td></tr><tr><td>400</td><td>CONTACT_MISSING</td><td>The specified user is not a contact.</td></tr></tbody></table>

### Related pages

#### [Contact list](/api/contacts/)

Working with contacts.
