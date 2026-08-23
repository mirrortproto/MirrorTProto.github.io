---
title: "CdnPublicKey"
original: "https://core.telegram.org/type/CdnPublicKey"
section: ref
description: "Public key to use only during handshakes to CDN DCs."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"CdnPublicKey","url":"/type/CdnPublicKey/"}]
layout: layout.njk
---

# CdnPublicKey

Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs.

```
cdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/cdnPublicKey">cdnPublicKey</a></td><td>Public key to use <strong>only</strong> during handshakes to <a href="/cdn">CDN</a> DCs.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
