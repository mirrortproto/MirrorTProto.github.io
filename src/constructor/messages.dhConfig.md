---
title: "messages.dhConfig"
original: "https://core.telegram.org/constructor/messages.dhConfig"
section: ref
description: "New set of configuring parameters."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.dhConfig","url":"/constructor/messages.dhConfig/"}]
layout: layout.njk
---

# messages.dhConfig

New set of configuring parameters.

```
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" align="center">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>g</strong></td><td align="center"><a href="/type/int">int</a></td><td>New value <strong>primitive root</strong>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>p</strong></td><td align="center"><a href="/type/bytes">bytes</a></td><td>New value <strong>prime</strong>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>version</strong></td><td align="center"><a href="/type/int">int</a></td><td>Version of set of parameters</td></tr><tr><td><strong>random</strong></td><td align="center"><a href="/type/bytes">bytes</a></td><td>Random sequence of bytes of assigned length</td></tr></tbody></table>

### Type

[messages.DhConfig](/type/messages.DhConfig/)
