---
title: "account.getTheme"
original: "https://core.telegram.org/method/account.getTheme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getTheme","url":"/method/account.getTheme/"}]
layout: layout.njk
---

# account.getTheme

Get theme information

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.getTheme#3a5869ec format:string theme:InputTheme = Theme;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Theme format, a string that identifies the theming engines supported by the client</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputTheme">InputTheme</a></td><td>Theme</td></tr></tbody></table>

### Result

[Theme](/type/Theme/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_FORMAT_INVALID</td><td>Invalid theme format provided.</td></tr><tr><td>400</td><td>THEME_INVALID</td><td>Invalid theme provided.</td></tr><tr><td>400</td><td>THEME_SLUG_INVALID</td><td>The specified theme slug is invalid.</td></tr></tbody></table>
