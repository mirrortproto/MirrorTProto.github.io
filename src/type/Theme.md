---
title: "Theme"
original: "https://core.telegram.org/type/Theme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Theme","url":"/type/Theme/"}]
layout: layout.njk
---

# Theme

Cloud theme

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;

---functions---

account.createTheme#652e4400 flags:# slug:string title:string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
account.updateTheme#2bf40ccc flags:# format:string theme:InputTheme slug:flags.0?string title:flags.1?string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
account.getTheme#3a5869ec format:string theme:InputTheme = Theme;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/theme">theme</a></td><td>Theme</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.createTheme">account.createTheme</a></td><td>Create a theme</td></tr><tr><td><a href="/method/account.updateTheme">account.updateTheme</a></td><td>Update theme</td></tr><tr><td><a href="/method/account.getTheme">account.getTheme</a></td><td>Get theme information</td></tr></tbody></table>
