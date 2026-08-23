---
title: "help.getCdnConfig"
original: "https://core.telegram.org/method/help.getCdnConfig"
section: ref
description: "Get configuration for CDN file downloads."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getCdnConfig","url":"/method/help.getCdnConfig/"}]
layout: layout.njk
---

# help.getCdnConfig

Get configuration for [CDN](https://core.telegram.org/cdn) file downloads.

```
cdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;
---functions---
help.getCdnConfig#52029342 = CdnConfig;
```

### Parameters

This constructor does not require any parameters.

### Result

[CdnConfig](/type/CdnConfig/)

### Both users and bots can use this method

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
