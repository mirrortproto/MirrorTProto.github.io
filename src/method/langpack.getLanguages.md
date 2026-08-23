---
title: "langpack.getLanguages"
original: "https://core.telegram.org/method/langpack.getLanguages"
section: ref
description: "Get information about all languages in a localization pack"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"langpack.getLanguages","url":"/method/langpack.getLanguages/"}]
layout: layout.njk
---

# langpack.getLanguages

Get information about all languages in a localization pack

```
---functions---
langpack.getLanguages#42c6978f lang_pack:string = Vector<LangPackLanguage>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Platform identifier (i.e. <code>android</code>, <code>tdesktop</code>, etc).</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackLanguage](/type/LangPackLanguage/)\>

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LANG_PACK_INVALID</td><td>The provided language pack is invalid.</td></tr></tbody></table>
