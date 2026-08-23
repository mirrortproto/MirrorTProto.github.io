---
title: "BotApp"
original: "https://core.telegram.org/type/BotApp"
section: ref
description: "Contains information about a direct link Mini App."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotApp","url":"/type/BotApp/"}]
layout: layout.njk
---

# BotApp

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps).

```
botAppNotModified#5da674b7 = BotApp;
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botAppNotModified">botAppNotModified</a></td><td>Bot app info hasn't changed.</td></tr><tr><td><a href="/constructor/botApp">botApp</a></td><td>Contains information about a <a href="/api/bots/webapps#direct-link-mini-apps">direct link Mini App</a>.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
