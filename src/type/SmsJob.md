---
title: "SmsJob"
original: "https://core.telegram.org/type/SmsJob"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SmsJob","url":"/type/SmsJob/"}]
layout: layout.njk
---

# SmsJob

Info about an SMS job.

```
smsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;

---functions---

smsjobs.getSmsJob#778d902f job_id:string = SmsJob;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/smsJob">smsJob</a></td><td>Info about an SMS job.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.getSmsJob">smsjobs.getSmsJob</a></td><td>Get info about an SMS job (official clients only).</td></tr></tbody></table>
