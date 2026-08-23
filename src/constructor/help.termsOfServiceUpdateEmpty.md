---
title: "help.termsOfServiceUpdateEmpty"
original: "https://core.telegram.org/constructor/help.termsOfServiceUpdateEmpty"
section: ref
description: "No changes were made to telegram's terms of service"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.termsOfServiceUpdateEmpty","url":"/constructor/help.termsOfServiceUpdateEmpty/"}]
layout: layout.njk
---

# help.termsOfServiceUpdateEmpty

No changes were made to telegram's terms of service

```
help.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>New TOS updates will have to be queried using <a href="/method/help.getTermsOfServiceUpdate">help.getTermsOfServiceUpdate</a> in <code>expires</code> seconds</td></tr></tbody></table>

### Type

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

### Related pages

#### [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/)

Look for updates of telegram's terms of service
