---
title: "PeerLocated"
original: "https://core.telegram.org/type/PeerLocated"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerLocated","url":"/type/PeerLocated/"}]
layout: layout.njk
---

# PeerLocated

Geolocated peer

```
peerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;
peerSelfLocated#f8ec284b expires:int = PeerLocated;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerLocated">peerLocated</a></td><td>Peer geolocated nearby</td></tr><tr><td><a href="/constructor/peerSelfLocated">peerSelfLocated</a></td><td>Current peer</td></tr></tbody></table>
