---
title: "Help.PeerColors"
original: "https://core.telegram.org/type/help.PeerColors"
section: ref
description: "Contains info about multiple color palettes »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.PeerColors","url":"/type/help.PeerColors/"}]
layout: layout.njk
---

# Help.PeerColors

Contains info about multiple [color palettes »](/api/colors/).

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;

---functions---

help.getPeerColors#da80f42f hash:int = help.PeerColors;
help.getPeerProfileColors#abcfa9fd hash:int = help.PeerColors;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.peerColorsNotModified">help.peerColorsNotModified</a></td><td>The list of color palettes has not changed.</td></tr><tr><td><a href="/constructor/help.peerColors">help.peerColors</a></td><td>Contains info about multiple <a href="/api/colors">color palettes »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getPeerColors">help.getPeerColors</a></td><td>Get the set of <a href="/api/colors">accent color palettes »</a> that can be used for message accents.</td></tr><tr><td><a href="/method/help.getPeerProfileColors">help.getPeerProfileColors</a></td><td>Get the set of <a href="/api/colors">accent color palettes »</a> that can be used in profile page backgrounds.</td></tr></tbody></table>

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
