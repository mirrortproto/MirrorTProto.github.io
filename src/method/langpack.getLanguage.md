---
title: "langpack.getLanguage"
original: "https://core.telegram.org/method/langpack.getLanguage"
section: ref
description: "Get information about a language in a localization pack"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"langpack.getLanguage","url":"/method/langpack.getLanguage/"}]
layout: layout.njk
---

# langpack.getLanguage

Get information about a language in a localization pack

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;
---functions---
langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Platform identifier (i.e. <code>android</code>, <code>tdesktop</code>, etc).</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Either an ISO 639-1 language code or a language pack name obtained from a <a href="/api/links#language-pack-links">language pack link</a>.</td></tr></tbody></table>

### Result

[LangPackLanguage](/type/LangPackLanguage/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LANG_CODE_NOT_SUPPORTED</td><td>The specified language code is not supported.</td></tr><tr><td>400</td><td>LANG_PACK_INVALID</td><td>The provided language pack is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
