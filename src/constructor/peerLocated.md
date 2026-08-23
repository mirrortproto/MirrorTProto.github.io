---
title: "peerLocated"
original: "https://core.telegram.org/constructor/peerLocated"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerLocated","url":"/constructor/peerLocated/"}]
layout: layout.njk
---

# peerLocated

Peer geolocated nearby

```
peerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Peer</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Validity period of current data</td></tr><tr><td><strong>distance</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Distance from the peer in meters</td></tr></tbody></table>

### Type

[PeerLocated](/type/PeerLocated/)
