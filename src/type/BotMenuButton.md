---
title: "BotMenuButton"
original: "https://core.telegram.org/type/BotMenuButton"
section: ref
description: "Indicates the action to execute when pressing the in-UI menu button for bots"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotMenuButton","url":"/type/BotMenuButton/"}]
layout: layout.njk
---

# BotMenuButton

Indicates the action to execute when pressing the in-UI menu button for bots

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;

---functions---

bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botMenuButtonDefault">botMenuButtonDefault</a></td><td>Placeholder <a href="/api/bots/menu">bot menu button</a> never returned to users: see <a href="/api/bots/menu">the docs for more info</a>.</td></tr><tr><td><a href="/constructor/botMenuButtonCommands">botMenuButtonCommands</a></td><td><a href="/api/bots/menu">Bot menu button</a> that opens the bot command list when clicked.</td></tr><tr><td><a href="/constructor/botMenuButton">botMenuButton</a></td><td><a href="/api/bots/menu">Bot menu button</a> that opens a <a href="/api/bots/webapps">web app</a> when clicked.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotMenuButton">bots.getBotMenuButton</a></td><td>Gets the menu button action for a given user or for all users, previously set using <a href="/method/bots.setBotMenuButton">bots.setBotMenuButton</a>; users can see this information in the <a href="/constructor/botInfo">botInfo</a> constructor.</td></tr></tbody></table>
