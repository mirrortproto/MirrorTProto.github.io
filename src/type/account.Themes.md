---
title: "account.Themes"
original: "https://core.telegram.org/type/account.Themes"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.Themes","url":"/type/account.Themes/"}]
layout: layout.njk
---

# account.Themes

Installed themes

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;

---functions---

account.getThemes#7206e458 format:string hash:long = account.Themes;
account.getChatThemes#d638de89 hash:long = account.Themes;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.themesNotModified">account.themesNotModified</a></td><td>No new themes were installed</td></tr><tr><td><a href="/constructor/account.themes">account.themes</a></td><td>Installed themes</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getThemes">account.getThemes</a></td><td>Get installed themes</td></tr><tr><td><a href="/method/account.getChatThemes">account.getChatThemes</a></td><td>Get all available chat <a href="/api/themes">themes »</a>.</td></tr></tbody></table>
