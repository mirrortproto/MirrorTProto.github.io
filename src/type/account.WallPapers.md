---
title: "Account.WallPapers"
original: "https://core.telegram.org/type/account.WallPapers"
section: ref
description: "Telegram apps support generating, sharing and synchronizing chat backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.WallPapers","url":"/type/account.WallPapers/"}]
layout: layout.njk
---

# Account.WallPapers

[Wallpapers](/api/wallpapers/)

```
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;

---functions---

account.getWallPapers#7967d36 hash:long = account.WallPapers;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.wallPapersNotModified">account.wallPapersNotModified</a></td><td>No new <a href="/api/wallpapers">wallpapers</a> were found</td></tr><tr><td><a href="/constructor/account.wallPapers">account.wallPapers</a></td><td>Installed <a href="/api/wallpapers">wallpapers</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPapers">account.getWallPapers</a></td><td>Returns a list of available <a href="/api/wallpapers">wallpapers</a>.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
