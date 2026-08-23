---
title: "LangPackLanguage"
original: "https://core.telegram.org/type/LangPackLanguage"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"LangPackLanguage","url":"/type/LangPackLanguage/"}]
layout: layout.njk
---

# LangPackLanguage

Language pack language

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;

---functions---

langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/langPackLanguage">langPackLanguage</a></td><td>Identifies a localization pack</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/langpack.getLanguage">langpack.getLanguage</a></td><td>Get information about a language in a localization pack</td></tr></tbody></table>
