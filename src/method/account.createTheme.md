---
title: "account.createTheme"
original: "https://core.telegram.org/method/account.createTheme"
section: ref
description: "Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.createTheme","url":"/method/account.createTheme/"}]
layout: layout.njk
---

# account.createTheme

Create a theme

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.createTheme#652e4400 flags:# slug:string title:string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Unique theme ID used to generate <a href="/api/links#theme-links">theme deep links</a>, can be empty to autogenerate a random ID.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Theme name</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputDocument">InputDocument</a></td><td>Theme file</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputThemeSettings">InputThemeSettings</a>&gt;</td><td>Theme settings, multiple values can be provided for the different base themes (day/night mode, etc).</td></tr></tbody></table>

### Result

[Theme](/type/Theme/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_MIME_INVALID</td><td>The theme's MIME type is invalid.</td></tr><tr><td>400</td><td>THEME_TITLE_INVALID</td><td>The specified theme title is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
