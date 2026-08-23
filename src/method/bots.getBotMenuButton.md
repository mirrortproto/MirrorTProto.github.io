---
title: "bots.getBotMenuButton"
original: "https://core.telegram.org/method/bots.getBotMenuButton"
section: ref
description: "Gets the menu button action for a given user or for all users, previously set using bots.setBotMenuButton; users can see this information in the botInfo constructor."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getBotMenuButton","url":"/method/bots.getBotMenuButton/"}]
layout: layout.njk
---

# bots.getBotMenuButton

Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](/method/bots.setBotMenuButton/); users can see this information in the [botInfo](/constructor/botInfo/) constructor.

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;
---functions---
bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>User ID or empty for the default menu button.</td></tr></tbody></table>

### Result

[BotMenuButton](/type/BotMenuButton/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [bots.setBotMenuButton](/method/bots.setBotMenuButton/)

Sets the [menu button action »](/api/bots/menu/) for a given user or for all users

#### [botInfo](/constructor/botInfo/)

Info about bots (available bot commands, etc)
