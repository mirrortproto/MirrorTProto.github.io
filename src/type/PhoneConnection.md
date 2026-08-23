---
title: "PhoneConnection"
original: "https://core.telegram.org/type/PhoneConnection"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhoneConnection","url":"/type/PhoneConnection/"}]
layout: layout.njk
---

# PhoneConnection

Phone call connection

```
phoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;
phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phoneConnection">phoneConnection</a></td><td>DEPRECATED (libtgvoip): Identifies an endpoint that can be used to connect to the other user in a phone call</td></tr><tr><td><a href="/constructor/phoneConnectionWebrtc">phoneConnectionWebrtc</a></td><td>WebRTC connection parameters for a <a href="/api/calls">phone call</a>.</td></tr></tbody></table>
