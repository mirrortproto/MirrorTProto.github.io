---
title: "smsjobs.EligibilityToJoin"
original: "https://core.telegram.org/type/smsjobs.EligibilityToJoin"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"smsjobs.EligibilityToJoin","url":"/type/smsjobs.EligibilityToJoin/"}]
layout: layout.njk
---

# smsjobs.EligibilityToJoin

SMS jobs eligibility

```
smsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;

---functions---

smsjobs.isEligibleToJoin#edc39d0 = smsjobs.EligibilityToJoin;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/smsjobs.eligibleToJoin">smsjobs.eligibleToJoin</a></td><td>SMS jobs eligibility</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.isEligibleToJoin">smsjobs.isEligibleToJoin</a></td><td>Check if we can process SMS jobs (official clients only).</td></tr></tbody></table>
