---
title: "Help.PeerColorSet"
original: "https://core.telegram.org/type/help.PeerColorSet"
section: ref
description: "Contains info about a color palette »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.PeerColorSet","url":"/type/help.PeerColorSet/"}]
layout: layout.njk
---

# Help.PeerColorSet

Contains info about a [color palette »](/api/colors/).

```
help.peerColorSet#26219a58 colors:Vector<int> = help.PeerColorSet;
help.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.peerColorSet">help.peerColorSet</a></td><td>Represents a <a href="/api/colors">color palette that can be used in message accents »</a>.</td></tr><tr><td><a href="/constructor/help.peerColorProfileSet">help.peerColorProfileSet</a></td><td>Represents a <a href="/api/colors">color palette that can be used in profile pages »</a>.</td></tr></tbody></table>

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
