---
title: "inputPasskeyResponseRegister"
original: "https://core.telegram.org/constructor/inputPasskeyResponseRegister"
section: ref
description: "WebAuthn registration response used when registering a new passkey, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPasskeyResponseRegister","url":"/constructor/inputPasskeyResponseRegister/"}]
layout: layout.njk
---

# inputPasskeyResponseRegister

WebAuthn registration response used when registering a new passkey, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.

Generated from the [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse) object.

```
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>client_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Base64url-decoded <code>clientDataJSON</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse">AuthenticatorAttestationResponse</a>, wrapped in <a href="/constructor/dataJSON">dataJSON</a></td></tr><tr><td><strong>attestation_data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Base64url-decoded <code>attestationObject</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse">AuthenticatorAttestationResponse</a></td></tr></tbody></table>

### Type

[InputPasskeyResponse](/type/InputPasskeyResponse/)

### Related pages

#### [dataJSON](/constructor/dataJSON/)

Represents a json-encoded object

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
