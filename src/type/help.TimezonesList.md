---
title: "help.TimezonesList"
original: "https://core.telegram.org/type/help.TimezonesList"
section: ref
description: "Timezone information that may be used elsewhere in the API, such as to set Telegram Business opening hours »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.TimezonesList","url":"/type/help.TimezonesList/"}]
layout: layout.njk
---

# help.TimezonesList

Timezone information that may be used elsewhere in the API, such as to set [Telegram Business opening hours »](/api/business/#opening-hours).

```
help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;

---functions---

help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.timezonesListNotModified">help.timezonesListNotModified</a></td><td>The timezone list has not changed.</td></tr><tr><td><a href="/constructor/help.timezonesList">help.timezonesList</a></td><td>Timezone information that may be used elsewhere in the API, such as to set <a href="/api/business#opening-hours">Telegram Business opening hours »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getTimezonesList">help.getTimezonesList</a></td><td>Returns timezone information that may be used elsewhere in the API, such as to set <a href="/api/business#opening-hours">Telegram Business opening hours »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
