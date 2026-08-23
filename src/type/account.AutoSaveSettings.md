---
title: "account.AutoSaveSettings"
original: "https://core.telegram.org/type/account.AutoSaveSettings"
section: ref
description: "Contains media autosave settings"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.AutoSaveSettings","url":"/type/account.AutoSaveSettings/"}]
layout: layout.njk
---

# account.AutoSaveSettings

Contains media autosave settings

```
account.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;

---functions---

account.getAutoSaveSettings#adcbbcda = account.AutoSaveSettings;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.autoSaveSettings">account.autoSaveSettings</a></td><td>Contains media autosave settings</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getAutoSaveSettings">account.getAutoSaveSettings</a></td><td>Get autosave settings</td></tr></tbody></table>
