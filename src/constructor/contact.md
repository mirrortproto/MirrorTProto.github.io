---
title: "contact"
original: "https://core.telegram.org/constructor/contact"
section: ref
description: "A contact of the current user that is registered in the system."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contact","url":"/constructor/contact/"}]
layout: layout.njk
---

# contact

A contact of the current user that is registered in the system.

```
contact#145ade0b user_id:long mutual:Bool = Contact;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>User identifier</td></tr><tr><td><strong>mutual</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Current user is in the user's contact list</td></tr></tbody></table>

### Type

[Contact](/type/Contact/)
