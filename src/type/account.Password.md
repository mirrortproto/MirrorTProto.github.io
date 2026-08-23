---
title: "account.Password"
original: "https://core.telegram.org/type/account.Password"
section: ref
description: "Configuration for two-factor authorization"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.Password","url":"/type/account.Password/"}]
layout: layout.njk
---

# account.Password

Configuration for two-factor authorization

```
account.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;

---functions---

account.getPassword#548a30f5 = account.Password;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.password">account.password</a></td><td>Configuration for two-factor authorization</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPassword">account.getPassword</a></td><td>Obtain configuration for two-factor authorization with password</td></tr></tbody></table>
