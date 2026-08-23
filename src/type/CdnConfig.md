---
title: "CdnConfig"
original: "https://core.telegram.org/type/CdnConfig"
section: ref
description: "Configuration for CDN file downloads."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"CdnConfig","url":"/type/CdnConfig/"}]
layout: layout.njk
---

# CdnConfig

Configuration for [CDN](https://core.telegram.org/cdn) file downloads.

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;

---functions---

help.getCdnConfig#52029342 = CdnConfig;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/cdnConfig">cdnConfig</a></td><td>Configuration for <a href="/cdn">CDN</a> file downloads.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getCdnConfig">help.getCdnConfig</a></td><td>Get configuration for <a href="/cdn">CDN</a> file downloads.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
