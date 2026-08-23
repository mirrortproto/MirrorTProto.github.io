---
title: "Help.PassportConfig"
original: "https://core.telegram.org/type/help.PassportConfig"
section: ref
description: "Telegram passport configuration"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.PassportConfig","url":"/type/help.PassportConfig/"}]
layout: layout.njk
---

# Help.PassportConfig

Telegram [passport](https://core.telegram.org/passport) configuration

```
help.passportConfigNotModified#bfb9f457 = help.PassportConfig;
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;

---functions---

help.getPassportConfig#c661ad08 hash:int = help.PassportConfig;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.passportConfigNotModified">help.passportConfigNotModified</a></td><td>Password configuration not modified</td></tr><tr><td><a href="/constructor/help.passportConfig">help.passportConfig</a></td><td>Telegram <a href="/passport">passport</a> configuration</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getPassportConfig">help.getPassportConfig</a></td><td>Get <a href="/passport">passport</a> configuration</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
