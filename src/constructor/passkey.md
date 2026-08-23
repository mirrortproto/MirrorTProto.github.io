---
title: "passkey"
original: "https://core.telegram.org/constructor/passkey"
section: ref
description: "Human-readable info about a passkey associated to an account, returned when creating a passkey » or listing passkeys »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"passkey","url":"/constructor/passkey/"}]
layout: layout.njk
---

# passkey

Human-readable info about a passkey associated to an account, returned when [creating a passkey »](/api/passkeys/#creating-a-passkey) or [listing passkeys »](/api/passkeys/#list-passkeys).

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Unique passkey ID, usable for example in <a href="/method/account.deletePasskey">account.deletePasskey</a>.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Human-readable passkey name</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Creation date of the passkey</td></tr><tr><td><strong>software_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>ID of the <a href="/api/custom-emoji">custom emoji</a> used as icon for the software or password manager that created the passkey</td></tr><tr><td><strong>last_usage_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Date when the passkey was last used to log in</td></tr></tbody></table>

### Type

[Passkey](/type/Passkey/)

### Related pages

#### [account.deletePasskey](/method/account.deletePasskey/)

Delete a passkey associated to the current account, see [here »](/api/passkeys/#delete-passkeys) for more info.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
