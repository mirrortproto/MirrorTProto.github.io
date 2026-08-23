---
title: "messages.BotApp"
original: "https://core.telegram.org/type/messages.BotApp"
section: ref
description: "Contains information about a direct link Mini App"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.BotApp","url":"/type/messages.BotApp/"}]
layout: layout.njk
---

# messages.BotApp

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;

---functions---

messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botApp">messages.botApp</a></td><td>Contains information about a <a href="/api/bots/webapps#direct-link-mini-apps">direct link Mini App</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getBotApp">messages.getBotApp</a></td><td>Obtain information about a <a href="/api/bots/webapps#direct-link-mini-apps">direct link Mini App</a></td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
