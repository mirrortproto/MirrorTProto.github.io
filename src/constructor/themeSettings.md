---
title: "themeSettings"
original: "https://core.telegram.org/constructor/themeSettings"
section: ref
description: "Telegram apps support generating, sharing and synchronizing chat backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"themeSettings","url":"/constructor/themeSettings/"}]
layout: layout.njk
---

# themeSettings

Theme settings

```
themeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>message_colors_animated</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>If set, the freeform gradient fill needs to be animated on every sent message.</td></tr><tr><td><strong>base_theme</strong></td><td style="text-align: center;"><a href="/type/BaseTheme">BaseTheme</a></td><td>Base theme</td></tr><tr><td><strong>accent_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Accent color, ARGB format</td></tr><tr><td><strong>outbox_accent_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Accent color of outgoing messages in ARGB format</td></tr><tr><td><strong>message_colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>The fill to be used as a background for outgoing messages, in RGB24 format.<br>If just one or two equal colors are provided, describes a solid fill of a background.<br>If two different colors are provided, describes the top and bottom colors of a 0-degree gradient.<br>If three or four colors are provided, describes a freeform gradient fill of a background.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/WallPaper">WallPaper</a></td><td><a href="/api/wallpapers">Wallpaper</a></td></tr></tbody></table>

### Type

[ThemeSettings](/type/ThemeSettings/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
