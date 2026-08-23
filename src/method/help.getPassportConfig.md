---
title: "help.getPassportConfig"
original: "https://core.telegram.org/method/help.getPassportConfig"
section: ref
description: "Get passport configuration"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getPassportConfig","url":"/method/help.getPassportConfig/"}]
layout: layout.njk
---

# help.getPassportConfig

Get [passport](https://core.telegram.org/passport) configuration

```
help.passportConfigNotModified#bfb9f457 = help.PassportConfig;
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;
---functions---
help.getPassportConfig#c661ad08 hash:int = help.PassportConfig;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.PassportConfig](/type/help.PassportConfig/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
