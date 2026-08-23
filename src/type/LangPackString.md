---
title: "LangPackString"
original: "https://core.telegram.org/type/LangPackString"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"LangPackString","url":"/type/LangPackString/"}]
layout: layout.njk
---

# LangPackString

Language pack string

```
langPackString#cad181f6 key:string value:string = LangPackString;
langPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;
langPackStringDeleted#2979eeb2 key:string = LangPackString;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/langPackString">langPackString</a></td><td>Translated localization string</td></tr><tr><td><a href="/constructor/langPackStringPluralized">langPackStringPluralized</a></td><td>A language pack string which has different forms based on the number of some object it mentions. See <a href="https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html">https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html</a> for more info</td></tr><tr><td><a href="/constructor/langPackStringDeleted">langPackStringDeleted</a></td><td>Deleted localization string</td></tr></tbody></table>
