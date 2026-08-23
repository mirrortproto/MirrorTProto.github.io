---
title: "messageActionSecureValuesSent"
original: "https://core.telegram.org/constructor/messageActionSecureValuesSent"
section: ref
description: "Request for secure telegram passport values was sent"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSecureValuesSent","url":"/constructor/messageActionSecureValuesSent/"}]
layout: layout.njk
---

# messageActionSecureValuesSent

Request for secure [telegram passport](https://core.telegram.org/passport) values was sent

```
messageActionSecureValuesSent#d95c6154 types:Vector<SecureValueType> = MessageAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueType">SecureValueType</a>&gt;</td><td>Secure value types</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
