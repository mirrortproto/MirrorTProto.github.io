---
title: "PeerColor"
original: "https://core.telegram.org/type/PeerColor"
section: ref
description: "Represents a color palette »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerColor","url":"/type/PeerColor/"}]
layout: layout.njk
---

# PeerColor

Represents a [color palette »](/api/colors/).

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerColor">peerColor</a></td><td>Represents a <a href="/api/colors">color palette »</a>.</td></tr><tr><td><a href="/constructor/peerColorCollectible">peerColorCollectible</a></td><td>Represents a <a href="/api/colors">color palette »</a> associated to a <a href="/api/gifts#collectible-gifts">collectible gift »</a>, see <a href="/api/colors#collectible-gift-palettes">here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputPeerColorCollectible">inputPeerColorCollectible</a></td><td>Represents a <a href="/api/colors">color palette »</a> associated to a <a href="/api/gifts#collectible-gifts">collectible gift »</a>, see <a href="/api/colors#collectible-gift-palettes">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
