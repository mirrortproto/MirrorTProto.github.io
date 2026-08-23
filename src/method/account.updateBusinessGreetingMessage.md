---
title: "account.updateBusinessGreetingMessage"
original: "https://core.telegram.org/method/account.updateBusinessGreetingMessage"
section: ref
description: "Set a list of Telegram Business greeting messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBusinessGreetingMessage","url":"/method/account.updateBusinessGreetingMessage/"}]
layout: layout.njk
---

# account.updateBusinessGreetingMessage

Set a list of [Telegram Business greeting messages](/api/business/#greeting-messages).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessGreetingMessage#66cdafc4 flags:# message:flags.0?InputBusinessGreetingMessage = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputBusinessGreetingMessage">InputBusinessGreetingMessage</a></td><td>Greeting message configuration and contents.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
