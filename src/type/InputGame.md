---
title: "InputGame"
original: "https://core.telegram.org/type/InputGame"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputGame","url":"/type/InputGame/"}]
layout: layout.njk
---

# InputGame

A game to send

```
inputGameID#32c3e77 id:long access_hash:long = InputGame;
inputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputGameID">inputGameID</a></td><td>Indicates an already sent game</td></tr><tr><td><a href="/constructor/inputGameShortName">inputGameShortName</a></td><td>Game by short name</td></tr></tbody></table>
