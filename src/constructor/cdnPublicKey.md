---
title: "cdnPublicKey"
original: "https://core.telegram.org/constructor/cdnPublicKey"
section: ref
description: "Public key to use only during handshakes to CDN DCs."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"cdnPublicKey","url":"/constructor/cdnPublicKey/"}]
layout: layout.njk
---

# cdnPublicKey

Public key to use **only** during handshakes to [CDN](https://core.telegram.org/cdn) DCs.

```
cdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/cdn">CDN DC</a> ID</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>RSA public key</td></tr></tbody></table>

### Type

[CdnPublicKey](/type/CdnPublicKey/)

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
