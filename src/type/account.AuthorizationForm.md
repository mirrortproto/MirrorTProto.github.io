---
title: "Account.AuthorizationForm"
original: "https://core.telegram.org/type/account.AuthorizationForm"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.AuthorizationForm","url":"/type/account.AuthorizationForm/"}]
layout: layout.njk
---

# Account.AuthorizationForm

Authorization form

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;

---functions---

account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.authorizationForm">account.authorizationForm</a></td><td><a href="/passport">Telegram Passport</a> authorization form</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getAuthorizationForm">account.getAuthorizationForm</a></td><td>Returns a Telegram Passport authorization form for sharing data with a service</td></tr></tbody></table>
