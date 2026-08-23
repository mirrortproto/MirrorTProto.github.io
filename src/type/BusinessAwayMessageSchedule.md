---
title: "BusinessAwayMessageSchedule"
original: "https://core.telegram.org/type/BusinessAwayMessageSchedule"
section: ref
description: "Specifies when should the Telegram Business away messages be sent."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessAwayMessageSchedule","url":"/type/BusinessAwayMessageSchedule/"}]
layout: layout.njk
---

# BusinessAwayMessageSchedule

Specifies when should the [Telegram Business away messages](/api/business/#away-messages) be sent.

```
businessAwayMessageScheduleAlways#c9b9e2b9 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleOutsideWorkHours#c3f2f501 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessAwayMessageScheduleAlways">businessAwayMessageScheduleAlways</a></td><td>Always send <a href="/api/business#away-messages">Telegram Business away messages</a> to users writing to us in private.</td></tr><tr><td><a href="/constructor/businessAwayMessageScheduleOutsideWorkHours">businessAwayMessageScheduleOutsideWorkHours</a></td><td>Send <a href="/api/business#away-messages">Telegram Business away messages</a> to users writing to us in private outside of the configured <a href="/api/business#opening-hours">Telegram Business working hours</a>.</td></tr><tr><td><a href="/constructor/businessAwayMessageScheduleCustom">businessAwayMessageScheduleCustom</a></td><td>Send <a href="/api/business#away-messages">Telegram Business away messages</a> to users writing to us in private in the specified time span.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
