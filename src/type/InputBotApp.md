---
title: "InputBotApp"
original: "https://core.telegram.org/type/InputBotApp"
section: ref
description: "Used to fetch information about a direct link Mini App"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBotApp","url":"/type/InputBotApp/"}]
layout: layout.njk
---

# InputBotApp

Used to fetch information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotAppID">inputBotAppID</a></td><td>Used to fetch information about a <a href="/api/bots/webapps#direct-link-mini-apps">direct link Mini App</a> by its ID</td></tr><tr><td><a href="/constructor/inputBotAppShortName">inputBotAppShortName</a></td><td>Used to fetch information about a <a href="/api/bots/webapps#direct-link-mini-apps">direct link Mini App</a> by its short name</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
