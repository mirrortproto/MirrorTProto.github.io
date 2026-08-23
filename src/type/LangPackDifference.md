---
title: "LangPackDifference"
original: "https://core.telegram.org/type/LangPackDifference"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"LangPackDifference","url":"/type/LangPackDifference/"}]
layout: layout.njk
---

# LangPackDifference

Language pack changes

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;

---functions---

langpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;
langpack.getDifference#cd984aa5 lang_pack:string lang_code:string from_version:int = LangPackDifference;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/langPackDifference">langPackDifference</a></td><td>Changes to the app's localization pack</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/langpack.getLangPack">langpack.getLangPack</a></td><td>Get localization pack strings</td></tr><tr><td><a href="/method/langpack.getDifference">langpack.getDifference</a></td><td>Get new strings in language pack</td></tr></tbody></table>
