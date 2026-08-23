---
title: "inputClientProxy"
original: "https://core.telegram.org/constructor/inputClientProxy"
section: ref
description: "Info about an MTProxy used to connect."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputClientProxy","url":"/constructor/inputClientProxy/"}]
layout: layout.njk
---

# inputClientProxy

Info about an [MTProxy](/mtproto/mtproto-transports/#transport-obfuscation) used to connect.

```
inputClientProxy#75588b3f address:string port:int = InputClientProxy;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Proxy address</td></tr><tr><td><strong>port</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Proxy port</td></tr></tbody></table>

### Type

[InputClientProxy](/type/InputClientProxy/)

### Related pages

#### [MTProto transports](/mtproto/mtproto-transports/)

The list of MTProto transport protocols used to wrap payloads.
