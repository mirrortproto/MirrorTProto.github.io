---
title: "PhoneCallProtocol"
original: "https://core.telegram.org/type/PhoneCallProtocol"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneCallProtocol","url":"/type/PhoneCallProtocol/"}]
layout: layout.njk
---

# PhoneCallProtocol

Phone call protocol

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallProtocol">phoneCallProtocol</a></td><td>Protocol info for the VoIP library, see <a href="/api/calls#populating-phonecallprotocol">here »</a> for details on how to populate it.</td></tr></tbody></table>
