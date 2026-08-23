---
title: "Account.TmpPassword"
original: "https://core.telegram.org/type/account.TmpPassword"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.TmpPassword","url":"/type/account.TmpPassword/"}]
layout: layout.njk
---

# Account.TmpPassword

Temporary password

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;

---functions---

account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.tmpPassword">account.tmpPassword</a></td><td>Temporary payment password</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getTmpPassword">account.getTmpPassword</a></td><td>Get temporary payment password</td></tr></tbody></table>
