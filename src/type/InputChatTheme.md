---
title: "InputChatTheme"
original: "https://core.telegram.org/type/InputChatTheme"
section: ref
description: "Specifies a chat theme »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChatTheme","url":"/type/InputChatTheme/"}]
layout: layout.njk
---

# InputChatTheme

Specifies a [chat theme »](/api/themes/#chat-themes).

```
inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatThemeEmpty">inputChatThemeEmpty</a></td><td>Remove any currently configured theme.</td></tr><tr><td><a href="/constructor/inputChatTheme">inputChatTheme</a></td><td>Set an emoji-based chat theme, returned by <a href="/method/account.getChatThemes">account.getChatThemes</a>.</td></tr><tr><td><a href="/constructor/inputChatThemeUniqueGift">inputChatThemeUniqueGift</a></td><td>Set a theme based on an owned or <a href="/api/gifts#hosted-collectible-gifts">hosted collectible gift »</a>, returned by <a href="/method/account.getUniqueGiftChatThemes">account.getUniqueGiftChatThemes</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
