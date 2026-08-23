---
title: "account.updateBirthday"
original: "https://core.telegram.org/method/account.updateBirthday"
section: ref
description: "Update our birthday, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBirthday","url":"/method/account.updateBirthday/"}]
layout: layout.njk
---

# account.updateBirthday

Update our [birthday, see here »](/api/profile/#birthday) for more info.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBirthday#cc6e0c11 flags:# birthday:flags.0?Birthday = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>birthday</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Birthday">Birthday</a></td><td>Birthday.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BIRTHDAY_INVALID</td><td>An invalid age was specified, must be between 0 and 150 years.</td></tr></tbody></table>

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
