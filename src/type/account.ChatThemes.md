---
title: "account.ChatThemes"
original: "https://core.telegram.org/type/account.ChatThemes"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.ChatThemes","url":"/type/account.ChatThemes/"}]
layout: layout.njk
---

# account.ChatThemes

Available chat themes

```
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;

---functions---

account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.chatThemesNotModified">account.chatThemesNotModified</a></td><td>The available chat themes were not modified</td></tr><tr><td><a href="/constructor/account.chatThemes">account.chatThemes</a></td><td>Available <a href="/api/themes#chat-themes">chat themes</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getUniqueGiftChatThemes">account.getUniqueGiftChatThemes</a></td><td>Obtain all <a href="/api/themes#chat-themes">chat themes »</a> associated to owned or <a href="/api/gifts#hosted-collectible-gifts">hosted collectible gifts »</a>.</td></tr></tbody></table>
