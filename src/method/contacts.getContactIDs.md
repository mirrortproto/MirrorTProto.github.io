---
title: "contacts.getContactIDs"
original: "https://core.telegram.org/method/contacts.getContactIDs"
section: ref
description: "Get the telegram IDs of all contacts."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getContactIDs","url":"/method/contacts.getContactIDs/"}]
layout: layout.njk
---

# contacts.getContactIDs

Get the telegram IDs of all contacts.  
Returns an array of Telegram user IDs for all contacts (0 if a contact does not have an associated Telegram account or have hidden their account using privacy settings).

```
---functions---
contacts.getContactIDs#7adc669d hash:long = Vector<int>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
