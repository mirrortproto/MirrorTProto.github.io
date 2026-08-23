---
title: "account.getPasskeys"
original: "https://core.telegram.org/method/account.getPasskeys"
section: ref
description: "List the passkeys associated to the current account that can be used to log in, see here » for more info on passkeys."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPasskeys","url":"/method/account.getPasskeys/"}]
layout: layout.njk
---

# account.getPasskeys

List the passkeys associated to the current account that can be used to log in, see [here »](/api/passkeys/#list-passkeys) for more info on passkeys.

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
---functions---
account.getPasskeys#ea1f0c52 = account.Passkeys;
```

### Parameters

This constructor does not require any parameters.

### Result

[account.Passkeys](/type/account.Passkeys/)

### Only users can use this method

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
